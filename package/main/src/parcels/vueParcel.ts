import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"

const bootstrap = bootstrapFac(() => {})

export const vueParcelConfig = {
  bootstrap,
  mount: mountFac(props => {
    System.import("vueApp").then((res: any) => {
      res.mount(props)
    })
  }),
  unmount: unmountFac(props => {
    System.import("vueApp").then((res: any) => {
      res.unmount(props)
    })
  }),
}
