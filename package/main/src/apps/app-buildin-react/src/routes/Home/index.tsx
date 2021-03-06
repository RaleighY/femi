import React, { useState, useEffect } from "react"

import Loading from "@components/Loading"
import history from "@app-buildin-react/src/common/history"
import { PAGE } from "@app-buildin-react/src/constants/paths"
import { Container, Intro } from "./home.style"

export default function() {
  const [loadingShow, setLoadingShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoadingShow(false)
    }, 1000)
  })

  const handleGoToPage = () => {
    history.push(PAGE)
  }

  return (
    <Container>
      <Intro>
        <h2>Femi</h2>
        <p>Hi, this is mirco frontend project automatically created by Femi</p>
        <p>
          contact: <u>raleighy@163.com</u>
        </p>
      </Intro>
      <div>
        <Loading loading={loadingShow}>
          <button onClick={handleGoToPage}>Go to Demo Page</button>
        </Loading>
      </div>
    </Container>
  )
}
