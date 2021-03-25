import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"

const bootstrap = bootstrapFac(props => {
  System.import("vue2App").then((res: any) => {
    res.bootstrap(props)
  })
})

const mount = mountFac(props => {
  System.import("vue2App").then(res => {
    res.mount(props)
  })
})

const unmount = unmountFac(props => {
  System.import("vue2App").then(res => {
    res.unmount(props)
  })
})

export { bootstrap, mount, unmount }
