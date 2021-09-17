import { createRouter, createWebHistory } from "vue-router";

// const MainVue = () => import("");
// const LostInTheVoid = () => import("");
const Hello = () => import("../views/Hello.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/hello", component: Hello, props: true },
    // { path: "*", component: LostInTheVoid },
  ],
});

export default router;
