import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css/animate.min.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
