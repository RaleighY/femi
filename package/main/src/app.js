import {
  APP_RUNTIME_REACT,
  APP_RUNTIME_VUE2,
  APP_RUNTIME_VUE3,
  APP_BUILDIN_REACT,
  APP_BUILDIN_VUE,
} from "@constants/appPath"

export default [
  {
    name: "appBuildinReact",
    key: "app-buildin-react",
    path: APP_BUILDIN_REACT,
    domId: "app-buildin-react",
  },
  {
    name: "appBuildinVueV2",
    key: "app-buildin-vueV2",
    path: APP_BUILDIN_VUE,
    domId: "app-buildin-vueV2",
  },
  {
    name: "appRuntimeReact",
    key: "app-runtime-react",
    path: APP_RUNTIME_REACT,
    domId: "app-runtime-react",
  },
  {
    name: "appRuntimeVueV2",
    key: "app-runtime-vueV2",
    path: APP_RUNTIME_VUE2,
    domId: "app-runtime-vueV2",
  },
  {
    name: "appRuntimeVueV3",
    key: "app-runtime-vueV3",
    path: APP_RUNTIME_VUE3,
    domId: "app-runtime-vueV3",
  },
]
