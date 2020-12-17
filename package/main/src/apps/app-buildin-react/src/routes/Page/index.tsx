import React, { useState, useEffect } from "react"
import { navigateToUrl, mountRootParcel, Parcel } from "single-spa"

import {
  APP_BUILDIN_VUE,
  APP_BUILDIN_REACT,
  APP_RUNTIME_REACT,
  APP_RUNTIME_VUE2,
  APP_RUNTIME_VUE3,
} from "@constants/appPath"
import { parcelFac } from "@common/parcelFac"

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
  const { mountParcel } = props
  const [vueParcel, setVueParcel] = useState<Parcel | null>(null)
  const [reactParcel, setReactParcel] = useState<Parcel | null>(null)
  const [vueRootParcel, setVueRootParcel] = useState<Parcel | null>(null)
  const [reactRootParcel, setReactRootParcel] = useState<Parcel | null>(null)

  const unload = (parcel: Parcel | null) => {
    if (parcel && parcel.getStatus() === "MOUNTED") {
      parcel.unmount()
    }
  }

  const handleGoToAppBuildinVueV2 = () => {
    navigateToUrl(APP_BUILDIN_VUE)
  }

  const handleGoToAppBuildinReact = () => {
    navigateToUrl(APP_BUILDIN_REACT)
  }

  const handleGoToAppRuntimeVueV2 = () => {
    navigateToUrl(APP_RUNTIME_VUE2)
  }

  const handleGoToAppRuntimeVueV3 = () => {
    navigateToUrl(APP_RUNTIME_VUE3)
  }

  const handleGoToAppRuntimeReact = () => {
    navigateToUrl(APP_RUNTIME_REACT)
  }

  const handleLoadReactRootParcel = () => {
    try {
      const parcel = parcelFac({ appName: "reactApp", domId: "item1" })
      unload(reactRootParcel)
      const parcelInstance = mountRootParcel(
        parcel.config,
        Object.assign(parcel.props, { path: location.pathname })
      )
      setReactRootParcel(parcelInstance)
    } catch (err) {
      console.log(err)
    }
  }

  const handleLoadVueRootParcel = () => {
    try {
      const parcel = parcelFac({ appName: "vue3App", domId: "item2" })
      unload(vueRootParcel)
      const parcelInstance = mountRootParcel(parcel.config, parcel.props)
      setVueRootParcel(parcelInstance)
    } catch (err) {
      console.log(err)
    }
  }

  const handleLoadReactParcel = () => {
    try {
      const parcel = parcelFac({ appName: "reactApp", domId: "item3" })
      unload(reactParcel)
      const parcelInstance = mountParcel(
        parcel.config,
        Object.assign(parcel.props, { path: location.pathname })
      )
      setReactParcel(parcelInstance)
    } catch (err) {
      console.log(err)
    }
  }

  const handleLoadVueParcel = () => {
    try {
      const parcel = parcelFac({ appName: "vue3App", domId: "item4" })
      unload(vueParcel)
      const parcelInstance = mountParcel(parcel.config, parcel.props)
      setVueParcel(parcelInstance)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    // handleLoadVueRootParcel()
    // handleLoadReactRootParcel()
  }, [])

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleGoToAppBuildinVueV2}>Go to Vue V2 App (buildin)</Button>
        <Button onClick={handleGoToAppBuildinReact}>Go to React App (buildin)</Button>
        <Button onClick={handleGoToAppRuntimeVueV2}>Go to Vue V2 App (runtime)</Button>
        <Button onClick={handleGoToAppRuntimeVueV3}>Go to Vue V3 App (runtime)</Button>
        <Button onClick={handleGoToAppRuntimeReact}>Go to React App (runtime)</Button>
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
