// 因为要兼容格式，所以在 Prod环境中需要通过 system.js 引入的模板需要写成 * as
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

// Vue.default.use(Router);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
  ],
});
