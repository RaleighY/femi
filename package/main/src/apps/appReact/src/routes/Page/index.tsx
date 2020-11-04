import React, { useState, useEffect } from "react"
import { navigateToUrl, mountRootParcel, Parcel } from "single-spa"

import { APP_VUE, APP_REACT, APP_PARCEL_REACT } from "@constants/appPath"
import { reactParcelConfig } from "@parcels/reactParcel"
import { vueParcelConfig } from "@parcels/vueParcel"

import {
  Container,
  ButtonContainer,
  WindowContainer,
  Item,
  Title,
  Window,
  Button,
} from "./Page.style"

export default function(props: { mountParcel: any }) {
  const [vueParcel, setVueParcel] = useState<Parcel | null>(null)
  const [reactParcel, setReactParcel] = useState<Parcel | null>(null)
  const [vueRootParcel, setVueRootParcel] = useState<Parcel | null>(null)
  const [reactRootParcel, setReactRootParcel] = useState<Parcel | null>(null)
  const handleGoToAppVue = () => {
    navigateToUrl(APP_VUE)
  }

  const handleGoToAppReact = () => {
    navigateToUrl(APP_REACT)
  }

  const handleGoToAppParcelReact = () => {
    navigateToUrl(APP_PARCEL_REACT)
  }

  const handleLoadReactRootParcel = () => {
    unload(reactRootParcel)
    const parcel = mountRootParcel(reactParcelConfig, {
      domElement: document.getElementById("item1")!,
    })
    setReactRootParcel(parcel)
  }

  const handleLoadVueRootParcel = () => {
    unload(vueRootParcel)
    const parcel = mountRootParcel(vueParcelConfig, {
      domElement: document.getElementById("item2")!,
    })
    setVueRootParcel(parcel)
  }

  const handleLoadReactParcel = () => {
    unload(reactParcel)
    System.import("reactApp").then((app: any) => {
      const parcel = props.mountParcel(reactParcelConfig, {
        domElement: document.getElementById("item3")!,
      })
      setReactParcel(parcel)
    })
  }

  const handleLoadVueParcel = () => {
    unload(vueParcel)
    System.import("vueApp").then((app: any) => {
      const parcel = props.mountParcel(vueParcelConfig, {
        domElement: document.getElementById("item4")!,
      })
      setVueParcel(parcel)
    })
  }

  const unload = (parcel: Parcel | null) => {
    if (parcel && parcel.getStatus() === "MOUNTED") {
      // @ts-ignore
      parcel.unmount({ name: "react-parcel" })
    }
  }

  useEffect(() => {
    unload(reactRootParcel)
    const parcel = mountRootParcel(reactParcelConfig, {
      domElement: document.getElementById("item1")!,
    })
    setReactRootParcel(parcel)
  }, [])

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleGoToAppVue}>Go to Vue App (buildin)</Button>
        <Button onClick={handleGoToAppReact}>Go to React App (buildin)</Button>
        <Button onClick={handleGoToAppParcelReact}>Go to React App (runtime)</Button>
      </ButtonContainer>

      <WindowContainer>
        <Title>1. Load runtime react app by mountRootParcel</Title>
        <Item>
          <Window id="item1"></Window>
          <div style={{ marginLeft: 20 }}>
            <Button onClick={handleLoadReactRootParcel} color="pink">
              Load
            </Button>
            <Button onClick={() => unload(reactRootParcel)} color="pink">
              Unload
            </Button>
          </div>
        </Item>

        <Title>2. Load runtime vue app by mountRootParcel</Title>
        <Item>
          <Window id="item2"></Window>
          <div style={{ marginLeft: 20 }}>
            <Button onClick={handleLoadVueRootParcel} color="pink">
              Load
            </Button>
            <Button onClick={() => unload(vueRootParcel)} color="pink">
              Unload
            </Button>
          </div>
        </Item>

        <Title>3. Load runtime react app by mountParcel</Title>
        <Item>
          <Window id="item3"></Window>
          <div style={{ marginLeft: 20 }}>
            <Button onClick={handleLoadReactParcel} color="pink">
              Load
            </Button>
            <Button onClick={() => unload(reactParcel)} color="pink">
              UnLoad
            </Button>
          </div>
        </Item>

        <Title>4. Load runtime vue app by mountParcel</Title>
        <Item>
          <Window id="item4"></Window>
          <div style={{ marginLeft: 20 }}>
            <Button onClick={handleLoadVueParcel} color="pink">
              Load
            </Button>
            <Button onClick={() => unload(vueParcel)} color="pink">
              UnLoad
            </Button>
          </div>
        </Item>
      </WindowContainer>
    </Container>
  )
}
