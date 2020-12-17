import React from "react"
import ReactDOM from "react-dom"

import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"
import Index from "./src/index"

let mountParcel: any

export const bootstrap = bootstrapFac(props => {
  mountParcel = props.mountParcel
})

export const mount = mountFac(props => {
  ReactDOM.render(<Index mountParcel={mountParcel} />, document.getElementById(props.domId))
})

export const unmount = unmountFac(props => {
  ReactDOM.unmountComponentAtNode(document.getElementById(props.domId)!)
})

!process.env.isSystem && ReactDOM.render(<Index />, document.getElementById("app-buildin-react"))
