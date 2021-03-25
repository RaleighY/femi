import React from "react"
import Helmet from "react-helmet"
import { navigateToUrl } from "single-spa"

import { history } from "@common/history"
import { PATH_TEST } from "@constants/path"
import { Container } from "@styles/index"

const Index = () => {
  const handleGoToTestPage = () => {
    history.push(PATH_TEST)
  }

  const handleGoToAppVue3 = () => {
    navigateToUrl("/vue3")
  }

  return (
    <Container>
      <Helmet>
        <title>Index Page</title>
      </Helmet>
      This is a react app
      <button onClick={handleGoToTestPage}>Go to test page</button>
      <button onClick={handleGoToAppVue3}>Go to App vue3</button>
    </Container>
  )
}

export default Index
