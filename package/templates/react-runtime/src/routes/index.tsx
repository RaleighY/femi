import React from "react"
import { Router, Route } from "react-router"
import { createBrowserHistory, History } from "history"

import { PATH_INDEX, PATH_TEST } from "@constants/path"
import Index from "@routes/Home"
import Test from "@routes/Test"
import { ContainerDev } from "@styles/index"

export let history: History<any>

export interface IAppProps {
  rootPath?: string
}
export const App = (props: IAppProps) => {
  const { rootPath } = props

  if (rootPath) {
    // 以微前端形式接入时，要补上主工程当前的路由前缀
    history = createBrowserHistory({
      basename: props.rootPath,
    })
  } else {
    history = createBrowserHistory({
      basename: "",
    })
  }

  return (
    <>
      <Router history={history}>
        <Route path={PATH_INDEX} component={Index} exact></Route>
        <Route path={PATH_TEST} component={Test}></Route>
      </Router>
    </>
  )
}

// App 根组件是没有固定宽高的
// 在以微前端形式接入主工程时由外部容器决定此 App 的容器大小
// 而在独立开发、独立部署时，默认套上全屏的壳
export const AppDev = () => {
  return (
    <ContainerDev>
      <App />
    </ContainerDev>
  )
}

export default App
