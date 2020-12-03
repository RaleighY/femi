import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"

const bootstrap = bootstrapFac(() => {})

export function parcelFac(options: { appName: string; domId: string; props?: {} }) {
  const { appName, domId, props } = options
  const dom = document.getElementById(domId)
  if (!dom) {
    throw new Error("dom element not found")
  }
  return {
    config: {
      bootstrap,
      mount: mountFac(props => {
        System.import(appName).then((res: any) => {
          res.mount(props)
        })
      }),
      unmount: unmountFac(props => {
        System.import(appName).then((res: any) => {
          res.unmount(props)
        })
      }),
    },
    props: Object.assign(props || {}, {
      domElement: dom,
    }),
  }
}

export default parcelFac
