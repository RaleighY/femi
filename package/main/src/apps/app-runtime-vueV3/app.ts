import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"

const bootstrap = bootstrapFac(() => {})

const mount = mountFac(props => {
  System.import("vue3App").then(res => {
    res.mount(props)
  })
})

const unmount = unmountFac(props => {
  System.import("vue3App").then(res => {
    res.unmount(props)
  })
})

export { bootstrap, mount, unmount }
