// This is a mirco frontend entry, export three necessary lifeCycle
import React from "react"
import ReactDOM from "react-dom"
import { App, AppDev } from "./routes/index"

export const bootstrap = () => {}
export const mount = (props: any) => {
  ReactDOM.render(<App rootPath={props.path} />, props.domElement)
}
export const unmount = (props: any) => {
  ReactDOM.unmountComponentAtNode(props.domElement)
}

!process.env.isSystem && ReactDOM.render(<AppDev />, document.getElementById("app-runtime-react"))
