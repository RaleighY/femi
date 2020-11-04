import React from "react"
import ReactDOM from "react-dom"

import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"

const bootstrap = bootstrapFac(() => {})

const mount = mountFac(props => {
  // @ts-ignore
  const system = window.System
  system.import("App").then((res: any) => {
    console.log(res.Index)
    res.mount(props.domId)
  })
})

const unmount = unmountFac(props => {
  console.log("unmount", props)
  // @ts-ignore
  const system = window.System
  system.import("App").then((res: any) => {
    console.log(res.Index)
    // const Index = res.Index
    // ReactDOM.render(<Index />, document.getElementById(props.domId))
    res.unmount(props.domId)
  })
})

export { bootstrap, mount, unmount }

export const parcelConfig = {
  bootstrap,
  mount: mountFac(props => {
    // @ts-ignore
    const system = window.System
    system.import("Component").then((res: any) => {
      console.log(res.Index)
      const Index = res.Index
      ReactDOM.render(<Index />, document.getElementById(props.domId))
    })
  }),
  unmount,
}
