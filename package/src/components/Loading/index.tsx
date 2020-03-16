import React from "react"

import Spin from "@components/Spin"

export interface ILoadingProps {
  loading: boolean
}

export default (props: ILoadingProps & React.Props<any>): any => {
  if (props.loading) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin />
      </div>
    )
  } else {
    return props.children || ""
  }
}
