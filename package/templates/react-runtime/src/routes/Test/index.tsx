import React from "react"
import Helmet from "react-helmet"

import history from "@common/history"
import { PATH_INDEX } from "@constants/path"
import { Container } from "@styles/index"

const Test = () => {
  const handleGoToIndexPage = () => {
    history.push(PATH_INDEX)
  }

  return (
    <Container>
      <Helmet>
        <title>Test Page</title>
      </Helmet>
      Now you test success.
      <button onClick={handleGoToIndexPage}>Back to index page</button>
    </Container>
  )
}

export default Test
