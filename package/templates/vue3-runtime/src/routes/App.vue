<template>
  <div>This is Home</div>
  <!-- <router-view>
    <p>In Vue Router 3, I render inside the route component</p>
  </router-view> -->
</template>

<script>
import { RouterView } from "vue-router"

export default {
  props: ["appName", "mountParcel", "singleSpa"],
  name: "App",
  components: {
    RouterView,
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
</style>
