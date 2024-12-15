import "./assets/main.css";
import "primeicons/primeicons.css";
import router from "./router";   // !NOTE  ./router= ./router/index.js

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)
app.use(router);
app.mount('#app');
// createApp(App).mount("#app");
