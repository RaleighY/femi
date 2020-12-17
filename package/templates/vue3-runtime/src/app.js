import { h, createApp } from "vue"
import singleSpaVue from "single-spa-vue"

import App from "./routes/App.vue"
import AppDev from "./routes/index.vue"
import router from "./router"
import "./set-public-path"

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        appName: this.name,
        mountParcel: this.mountParcel,
        singleSpa: JSON.stringify(this.singleSpa),
      })
    },
  },
  handleInstance: app => {
    // app.use(router)
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

if (!process.env.isSystem) {
  createApp(AppDev)
    .use(router)
    .mount("#app-runtime-vueV3")
}
