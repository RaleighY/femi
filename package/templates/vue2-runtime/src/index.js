import Vue from "vue";
import App from "./routes/App.vue";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app-vue",
  router,
  render: (h) => h(App),
});
