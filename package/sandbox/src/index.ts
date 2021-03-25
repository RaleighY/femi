export interface ISandbox {
  name: string
  proxy: WindowProxy
}
export type FakeWindow = Window & Record<PropertyKey, any>
class Sandbox implements ISandbox {
  name: string
  proxy: WindowProxy

  constructor(name: string) {
    this.name = name

    const rawWindow = window

    const proxy: WindowProxy = new Proxy(rawWindow, {
      get: (target, property) => {
        return Reflect.get(target, property)
      },
      set: (target, property, value) => {
        return Reflect.set(target, property, value)
      },
    })

    this.proxy = proxy
  }
}

export default Sandbox
