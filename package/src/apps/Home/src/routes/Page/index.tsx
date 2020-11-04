import React from "react"
import { navigateToUrl, mountRootParcel } from "single-spa"

import { APP_PARCEL } from "@constants/appPath"
import { parcelConfig } from "@apps/Parcel/app"

import { Container, Item } from "./Page.style"

export default function() {
  const handleClickitem1 = () => {
    // @ts-ignore
    mountRootParcel(parcelConfig, { domElement: "xxx", domId: "item1" })
  }

  const handleClickitem2 = () => {
    navigateToUrl(APP_PARCEL)
  }

  return (
    <Container>
      <Item id="item1">
        <button onClick={handleClickitem1}>click me</button>
      </Item>
      <Item id="item2">
        <button onClick={handleClickitem2}>click me</button>
      </Item>
    </Container>
  )
}
