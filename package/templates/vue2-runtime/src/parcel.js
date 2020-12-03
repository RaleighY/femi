import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./routes/Home/index.vue";
import router from "./router";
import "./set-public-path";

const vueLifecycles = singleSpaVue({
  // Vue: Vue.default,
  Vue: Vue,
  appOptions: {
    render(h) {
      return h(App);
    },
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
