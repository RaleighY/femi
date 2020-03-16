import React from "react"
import ReactDOM from "react-dom"

import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"
import Index from "./src/index"

export const bootstrap = bootstrapFac(() => {})

export const mount = mountFac(props => {
  ReactDOM.render(<Index />, document.getElementById(props.domId))
})

export const unmount = unmountFac(props => {
  ReactDOM.unmountComponentAtNode(document.getElementById(props.domId)!)
})
