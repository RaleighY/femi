import { registerApplication, start } from "single-spa"
import apps from "./app"
import "./main.less"

const pathPrefix = (prefix, exact) => location =>
  exact ? location.pathname === prefix : location.pathname.startsWith(prefix)

const getApp = appName => import(`./apps/${appName}/app`)

apps
  .map(item => {
    item.domElement = document.getElementById(item.domId)
    item.domElementGetter = () => document.getElementById(item.domId)
    return item
  })
  .forEach(appConfig => {
    registerApplication(
      appConfig.name,
      () => getApp(appConfig.key),
      appConfig.path
        ? pathPrefix(appConfig.path, appConfig.isPathExact ? true : false)
        : () => true,
      appConfig
    )
  })

window.addEventListener("single-spa:app-change", evt => {})

start()
