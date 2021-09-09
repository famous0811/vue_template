import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@iconify/iconify";
// const mixin = {
//   created() {
//     alert("mixin");
//   },
// };
createApp(App).use(router).use(store).mount("#app");
