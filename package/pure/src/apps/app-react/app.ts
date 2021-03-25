import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"
import Sandbox from "sandbox"

const bootstrap = bootstrapFac(props => {
  System.import("reactApp").then((res: any) => {
    res.bootstrap(props)
  })

  const sandbox = new Sandbox("react")
  // @ts-ignore
  console.log(sandbox.proxy, Object.keys(window))
})

const mount = mountFac(props => {
  const html = document.getElementsByTagName("html")[0]
  html.className += " react"
  System.import("reactApp").then((res: any) => {
    res.mount(props)
  })
})

const unmount = unmountFac(props => {
  const html = document.getElementsByTagName("html")[0]
  const c = html.className
  const matchResult = c.match("react")

  if (matchResult) {
    html.className = c.slice(0, matchResult.index) + c.slice(matchResult.index! + "react".length)
  }

  System.import("reactApp").then((res: any) => {
    res.unmount(props)
  })
})

export { bootstrap, mount, unmount }
