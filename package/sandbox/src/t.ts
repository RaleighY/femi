export interface ISandbox {
  name: string
  proxy: WindowProxy
}

const rawObjectDefineProperty = Object.defineProperty

/*
 variables who are impossible to be overwrite need to be escaped from proxy sandbox for performance reasons
 */
const unscopables = {
  undefined: true,
  Array: true,
  Object: true,
  String: true,
  Boolean: true,
  Math: true,
  Number: true,
  Symbol: true,
  parseFloat: true,
  Float32Array: true,
}

export type FakeWindow = Window & Record<PropertyKey, any>

export let currentRunningSandboxProxy: WindowProxy | null

function setCurrentRunningSandboxProxy(proxy: WindowProxy | null) {
  currentRunningSandboxProxy = proxy
}

function createFakeWindow(global: Window) {
  // map always has the fastest performance in has check scenario
  // see https://jsperf.com/array-indexof-vs-set-has/23
  const propertiesWithGetter = new Map<PropertyKey, boolean>()
  const fakeWindow = {} as FakeWindow

  /*
   copy the non-configurable property of global to fakeWindow
   see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor
   > A property cannot be reported as non-configurable, if it does not exists as an own property of the target object or if it exists as a configurable own property of the target object.
   */
  Object.getOwnPropertyNames(global)
    .filter((p) => {
      const descriptor = Object.getOwnPropertyDescriptor(global, p)
      return !descriptor?.configurable
    })
    .forEach((p) => {
      const descriptor = Object.getOwnPropertyDescriptor(global, p)
      if (descriptor) {
        const hasGetter = Object.prototype.hasOwnProperty.call(descriptor, 'get')

        /*
         make top/self/window property configurable and writable, otherwise it will cause TypeError while get trap return.
         see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get
         > The value reported for a property must be the same as the value of the corresponding target object property if the target object property is a non-writable, non-configurable data property.
         */
        if (
          p === 'top' ||
          p === 'parent' ||
          p === 'self' ||
          p === 'window' ||
          (process.env.NODE_ENV === 'test' && (p === 'mockTop' || p === 'mockSafariTop'))
        ) {
          descriptor.configurable = true
          /*
           The descriptor of window.window/window.top/window.self in Safari/FF are accessor descriptors, we need to avoid adding a data descriptor while it was
           Example:
            Safari/FF: Object.getOwnPropertyDescriptor(window, 'top') -> {get: function, set: undefined, enumerable: true, configurable: false}
            Chrome: Object.getOwnPropertyDescriptor(window, 'top') -> {value: Window, writable: false, enumerable: true, configurable: false}
           */
          if (!hasGetter) {
            descriptor.writable = true
          }
        }

        if (hasGetter) propertiesWithGetter.set(p, true)

        // freeze the descriptor to avoid being modified by zone.js
        // see https://github.com/angular/zone.js/blob/a5fe09b0fac27ac5df1fa746042f96f05ccb6a00/lib/browser/define-property.ts#L71
        rawObjectDefineProperty(fakeWindow, p, Object.freeze(descriptor))
      }
    })

  return {
    fakeWindow,
    propertiesWithGetter,
  }
}

const naughtySafari = typeof document.all === 'function' && typeof document.all === 'undefined'
const isCallable = naughtySafari
  ? (fn: any) => typeof fn === 'function' && typeof fn !== 'undefined'
  : (fn: any) => typeof fn === 'function'
const functionBoundedValueMap = new WeakMap<CallableFunction, CallableFunction>()

const boundedMap = new WeakMap<CallableFunction, boolean>()
export function isBoundedFunction(fn: CallableFunction) {
  if (boundedMap.has(fn)) {
    return boundedMap.get(fn)
  }
  /*
   indexOf is faster than startsWith
   see https://jsperf.com/string-startswith/72
   */
  const bounded = fn.name.indexOf('bound ') === 0 && !fn.hasOwnProperty('prototype')
  boundedMap.set(fn, bounded)
  return bounded
}

const constructableMap = new WeakMap<any | FunctionConstructor, boolean>()
export function isConstructable(fn: () => any | FunctionConstructor) {
  if (constructableMap.has(fn)) {
    return constructableMap.get(fn)
  }

  const constructableFunctionRegex = /^function\b\s[A-Z].*/
  const classRegex = /^class\b/

  // 有 prototype 并且 prototype 上有定义一系列非 constructor 属性，则可以认为是一个构造函数
  const constructable =
    (fn.prototype &&
      fn.prototype.constructor === fn &&
      Object.getOwnPropertyNames(fn.prototype).length > 1) ||
    constructableFunctionRegex.test(fn.toString()) ||
    classRegex.test(fn.toString())
  constructableMap.set(fn, constructable)
  return constructable
}

function getTargetValue(target: any, value: any): any {
  const cachedBoundFunction = functionBoundedValueMap.get(value)
  if (cachedBoundFunction) {
    return cachedBoundFunction
  }

  /*
    仅绑定 isCallable && !isBoundedFunction && !isConstructable 的函数对象，如 window.console、window.atob 这类。目前没有完美的检测方式，这里通过 prototype 中是否还有可枚举的拓展方法的方式来判断
    @warning 这里不要随意替换成别的判断方式，因为可能触发一些 edge case（比如在 lodash.isFunction 在 iframe 上下文中可能由于调用了 top window 对象触发的安全异常）
   */
  if (isCallable(value) && !isBoundedFunction(value) && !isConstructable(value)) {
    const boundValue = Function.prototype.bind.call(value, target)

    // some callable function has custom fields, we need to copy the enumerable props to boundValue. such as moment function.
    // use for..in rather than Object.keys.forEach for performance reason
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in value) {
      boundValue[key] = value[key]
    }

    // copy prototype if bound function not have
    // mostly a bound function have no own prototype, but it not absolute in some old version browser, see https://github.com/umijs/qiankun/issues/1121
    if (value.hasOwnProperty('prototype') && !boundValue.hasOwnProperty('prototype'))
      boundValue.prototype = value.prototype

    functionBoundedValueMap.set(value, boundValue)
    return boundValue
  }

  return value
}

class Sandbox implements ISandbox {
  name: string
  proxy: WindowProxy

  constructor(name: string) {
    this.name = name

    const rawWindow = window
    const { fakeWindow, propertiesWithGetter } = createFakeWindow(rawWindow)

    const hasOwnProperty = (key: PropertyKey) =>
      fakeWindow.hasOwnProperty(key) || rawWindow.hasOwnProperty(key)

    const proxy: WindowProxy = new Proxy(fakeWindow, {
      get: (target, property) => {
        if (property === Symbol.unscopables) return unscopables

        // avoid who using window.window or window.self to escape the sandbox environment to touch the really window
        // see https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js#L13
        if (property === 'window' || property === 'self') {
          return proxy
        }

        // hijack global accessing with globalThis keyword
        if (property === 'globalThis') {
          return proxy
        }

        if (
          property === 'top' ||
          property === 'parent' ||
          (process.env.NODE_ENV === 'test' &&
            (property === 'mockTop' || property === 'mockSafariTop'))
        ) {
          // if your master app in an iframe context, allow these props escape the sandbox
          if (rawWindow === rawWindow.parent) {
            return proxy
          }
          return (rawWindow as any)[property]
        }

        // proxy.hasOwnProperty would invoke getter firstly, then its value represented as rawWindow.hasOwnProperty
        if (property === 'hasOwnProperty') {
          return hasOwnProperty
        }

        // mark the symbol to document while accessing as document.createElement could know is invoked by which sandbox for dynamic append patcher
        if (property === 'document' || property === 'eval') {
          setCurrentRunningSandboxProxy(proxy)
          // FIXME if you have any other good ideas
          // remove the mark in next tick, thus we can identify whether it in micro app or not
          // this approach is just a workaround, it could not cover all complex cases, such as the micro app runs in the same task context with master in some case
          Promise.resolve().then(() => setCurrentRunningSandboxProxy(null))
          switch (property) {
            case 'document':
              return document
            case 'eval':
              // eslint-disable-next-line no-eval
              return eval
            // no default
          }
        }

        // eslint-disable-next-line no-nested-ternary
        const value = propertiesWithGetter.has(property)
          ? (rawWindow as any)[property]
          : property in target
          ? (target as any)[property]
          : (rawWindow as any)[property]

        return getTargetValue(rawWindow, value)
      },
      set: (target, property, value) => {
        return Reflect.set(target, property, value)
      },
    })

    this.proxy = proxy
  }
}

export default Sandbox
