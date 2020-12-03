import { createApp } from "vue"
import App from "./routes/index.vue"
import router from "./router"

createApp(App)
  .use(router)
  .mount("#app-vue")
