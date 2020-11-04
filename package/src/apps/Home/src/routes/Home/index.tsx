import React, { useState, useEffect } from "react"

import history from "@Home/src/common/history"
import { PAGE } from "@Home/src/constants/paths"
import Loading from "@components/Loading"

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
          <button onClick={handleGoToPage}>Go To Page</button>
        </Loading>
      </div>
    </Container>
  )
}
