import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Landing from "../pages/Landing.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
