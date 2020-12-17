import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"

const bootstrap = bootstrapFac(props => {
  System.import("reactApp").then((res: any) => {
    res.bootstrap(props)
  })
})

const mount = mountFac(props => {
  System.import("reactApp").then((res: any) => {
    res.mount(props)
  })
})

const unmount = unmountFac(props => {
  System.import("reactApp").then((res: any) => {
    res.unmount(props)
  })
})

export { bootstrap, mount, unmount }
