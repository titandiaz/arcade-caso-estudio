import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import fortawesome from "./plugins/fortawesome";
import swiper from "./plugins/swiper";
import "./index.css";

const app = createApp(App);

app.use(fortawesome);
app.use(swiper);
app.use(router);
app.mount("#app");
