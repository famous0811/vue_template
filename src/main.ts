import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const mixin = {
  created() {
    alert("mixin");
  },
};
createApp({ App, mixins: [mixin] })
  .use(router)
  .use(store)
  .mount("#app");
