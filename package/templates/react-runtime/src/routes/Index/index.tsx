import React from "react"
import Helmet from "react-helmet"

import { history } from "@common/history"
import { PATH_TEST } from "@constants/path"
import { Container } from "@styles/index"

const Index = () => {
  const handleGoToTestPage = () => {
    history.push(PATH_TEST)
  }

  return (
    <Container>
      <Helmet>
        <title>Index Page</title>
      </Helmet>
      This is a react app
      <button onClick={handleGoToTestPage}>Go to test page</button>
    </Container>
  )
}

export default Index
