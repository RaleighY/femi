import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { Helmet } from "react-helmet"

import Home from "./routes/Home"
import history from "./common/history"
import { HOME } from "./constants/paths"

import GlobalStyles from "@styles/index"

export default () => {
  return (
    <>
      <Helmet>
        <title>App Home</title>
      </Helmet>

      <GlobalStyles />

      <Router history={history}>
        <Switch>
          <Route path={HOME} component={Home} exact />
        </Switch>
      </Router>
    </>
  )
}
