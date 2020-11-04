import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"

const bootstrap = bootstrapFac(() => {})

export const reactParcelConfig = {
  bootstrap,
  mount: mountFac(props => {
    System.import("reactApp").then((res: any) => {
      res.mount(props)
    })
  }),
  unmount: unmountFac(props => {
    System.import("reactApp").then((res: any) => {
      res.unmount(props)
    })
  }),
}
