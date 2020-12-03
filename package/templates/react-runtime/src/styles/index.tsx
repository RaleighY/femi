import React from "react"
import styled from "styled-components"

// import { Normalize } from "./NormalizeCss"
import { MyGlobalStyles } from "./MyGlobalStyles"

export default () => {
  return (
    <>
      {/* <Normalize /> */}
      <MyGlobalStyles />
    </>
  )
}

export const ContainerDev = styled.div`
  height: 100vh;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #61dafb;
  background-color: #282c34;
`
