import { createRouter, createWebHistory } from "vue-router"
import Home from "../routes/Home/index.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
  ],
})

export default router
