/**
 * @description 自定义生命周期bootstrap示例
 * @author raleighy <raleighy@163.com>
 * @param {*} props
 * @returns
 */
export function bootstrapFac(fn?: (props: IAppConfig) => void) {
  return (props: IAppConfig) =>
    Promise.resolve().then(() => {
      fn && fn(props)
      // One-time initialization code goes here
      console.log("bootstrapped!")
    })
}

/**
 * @description 自定义Mount生命周期，传入框架的挂载函数即可
 * @author raleighy <raleighy@163.com>
 * @param {(domId: string) => void} fn
 * @returns
 */
export function mountFac(fn: (props: IAppConfig) => void) {
  return (props: IAppConfig) =>
    Promise.resolve().then(() => {
      // Do framework UI rendering here
      try {
        fn(props)
        console.log("自定义渲染App:", props.name, "成功")
      } catch (e) {
        console.log("自定义渲染App:", props.name, "失败:", e)
      }
    })
}

/**
 * @description
 * @author raleighy <raleighy@163.com>
 * @param {(domId: string) => void} fn
 * @returns
 */
export function unmountFac(fn: (props: IAppConfig) => void) {
  return (props: IAppConfig) =>
    Promise.resolve().then(() => {
      // Do framework UI unrendering here
      try {
        fn(props)
        console.log("自定义卸载App:", props.name, "成功")
      } catch (e) {
        console.log("自定义卸载App:", props.name, "失败:", e)
      }
    })
}
