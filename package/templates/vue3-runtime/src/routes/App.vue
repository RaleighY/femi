<template>
  <div class="app">
    <a @click="handleGotoAppReact">Go to App React</a>
    <router-view />
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router"
import { navigateToUrl } from "single-spa"

export default {
  props: ["appName", "mountParcel", "singleSpa"],
  name: "App",
  components: {
    RouterView,
    RouterLink,
  },
  methods: {
    handleGotoAppReact() {
      navigateToUrl("/react")
    },
  },
  mounted() {
    console.log("appName:", this.appName)
    // console.log("singleSpa:", JSON.parse(this.singleSpa))
    // mountParcel 从根组件传递进来，用于做 Parcel 加载，需要自行保存，由 mountParcel 它导入进来的 Parcel 会自动卸载
    // 区别与 mountRootParcel，是 single-spa 的顶层 api，由 mountRootParcel 它导入进来的 Parcel 不会自动卸载
    console.log("mountParcel:", this.mountParcel)
  },
}
</script>

<style>
.single-spa-container {
  width: 100%;
  height: 100%;
}

.app {
  width: 100%;
  height: 100%;
  background-color: #96999c;
}
</style>
