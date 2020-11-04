import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { Helmet } from "react-helmet"

import Page from "./routes/Page"
import Home from "./routes/Home"
import history from "./common/history"
import { HOME, PAGE } from "./constants/paths"

import GlobalStyles from "@styles/index"

export interface IIndexProps {
  mountParcel?: any
}

export default (props: IIndexProps) => {
  return (
    <>
      <Helmet>
        <title>App Home</title>
      </Helmet>

      <GlobalStyles />

      <Router history={history}>
        <Switch>
          <Route path={PAGE} render={() => <Page mountParcel={props.mountParcel} />} />
          <Route path={HOME} component={Home} />
        </Switch>
      </Router>
    </>
  )
}
