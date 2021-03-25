<template>
  <div>
    This is about
    <p>
      <router-link to="/vue3">go to Home</router-link>
    </p>
  </div>
</template>

<script>
import { RouterLink } from "vue-router"

export default {
  name: "About",
  components: {
    RouterLink,
  },
}
</script>

<style>
</style>
