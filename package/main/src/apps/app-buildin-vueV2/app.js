import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import singleSpaVue from "single-spa-vue"

const vueLifecycles = singleSpaVue({
  Vue,
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
    el: "#app-buildin-vueV2",
    render: h => h(App),
  })
}
