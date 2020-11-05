import React from "react";
import { Router, Route } from "react-router";

import { createBrowserHistory } from "history";
import "./index.css";

const history = createBrowserHistory({
  basename: "/app-react/page",
});

// Parcel: 由外部容器决定此 App 的容器大小
export const Index = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Route
          path="/"
          render={() => {
            return (
              <>
                This is a react app
                <button onClick={() => history.push("/test")}>go test</button>
              </>
            );
          }}
        ></Route>
        <Route path="/test" render={() => <div>1231231231</div>}></Route>
      </div>
    </Router>
  );
};

// 独立: 全屏启动
export const IndexDev = () => {
  return (
    <div className="container-dev">
      <Index />
    </div>
  );
};

export default Index;
