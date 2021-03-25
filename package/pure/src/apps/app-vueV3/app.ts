import { bootstrapFac, mountFac, unmountFac } from "@common/appFac"

const bootstrap = bootstrapFac(props => {
  System.import("vue3App").then((res: any) => {
    res.bootstrap(props)
  })
})

const mount = mountFac(props => {
  const html = document.getElementsByTagName("html")[0]
  html.className += " vue3"
  System.import("vue3App").then(res => {
    res.mount(props)
  })
})

const unmount = unmountFac(props => {
  const html = document.getElementsByTagName("html")[0]
  const c = html.className
  const matchResult = c.match("vue3")
  console.log("matchResult", matchResult)

  if (matchResult) {
    html.className = c.slice(0, matchResult.index) + c.slice(matchResult.index! + "vue3".length)
  }
  System.import("vue3App").then(res => {
    res.unmount(props)
  })
})

export { bootstrap, mount, unmount }
