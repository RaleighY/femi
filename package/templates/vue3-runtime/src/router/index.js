import { createRouter, createWebHistory } from "vue-router"
import Home from "../routes/Home"
import About from "../routes/About"

const history = createWebHistory()
history.listen(e => {
  console.log("e", e)
})

export const router = createRouter({
  history,
  routes: [
    { path: "/vue3", component: Home },
    { path: "/vue3/about", component: About },
  ],
})

export default router
