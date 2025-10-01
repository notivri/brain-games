import { createApp } from "vue"
import "./app/styles/main.css"
import App from "./app/App.vue"
import router from "./app/router/router"

createApp(App).use(router).mount("#app")
