<template>
  <div class="container-dev">
    <Index></Index>
  </div>
</template>

<script>
import Index from "./Home/index.vue";
export default {
  name: "App",
  components: {
    Index,
  },
};
</script>

<style>
body {
  margin: 0;
}
.container-dev {
  height: 100vh;
}
</style>
