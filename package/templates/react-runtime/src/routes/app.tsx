import React from "react"
import { Router, Route } from "react-router"

import history from "@common/history"
import { PATH_INDEX, PATH_TEST } from "@constants/path"
import Index from "@routes/Index"
import Test from "@routes/Test"
import GlobalStyle, { ContainerDev } from "@styles/index"

// Parcel: 由外部容器决定此 App 的容器大小
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router history={history}>
        <Route path={PATH_INDEX} component={Index} exact></Route>
        <Route path={PATH_TEST} component={Test}></Route>
      </Router>
    </>
  )
}

// 独立: 全屏启动
export const AppDev = () => {
  return (
    <ContainerDev>
      <App />
    </ContainerDev>
  )
}

export default App
