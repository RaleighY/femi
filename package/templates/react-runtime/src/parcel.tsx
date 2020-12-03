// This is a mirco frontend entry, export three necessary lifeCycle
import React from "react"
import ReactDOM from "react-dom"

import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"
import RootComponent from "./routes/app"

export const bootstrap = bootstrapFac(() => {})
export const mount = mountFac(props => {
  ReactDOM.render(<RootComponent rootPath={props.path} />, props.domElement)
})
export const unmount = unmountFac(props => {
  ReactDOM.unmountComponentAtNode(props.domElement)
})
