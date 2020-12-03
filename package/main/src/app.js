import {
  APP_RUNTIME_REACT,
  APP_RUNTIME_VUE,
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
    name: "appRuntimeVue",
    key: "app-runtime-vueV3",
    path: APP_RUNTIME_VUE,
    domId: "app-runtime-vueV3",
  },
]
