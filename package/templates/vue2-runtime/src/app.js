import Vue from "vue"
import singleSpaVue from "single-spa-vue"

import App from "./routes/Home/index.vue"
import router from "./router"
import "./set-public-path"

const vueLifecycles = singleSpaVue({
  // Vue: Vue.default,
  Vue: Vue,
  appOptions: {
    render(h) {
      return h(App)
    },
    router,
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

if (!process.env.isSystem) {
  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: "#app-runtime-vueV2",
    render: h => h(App),
  })
}
