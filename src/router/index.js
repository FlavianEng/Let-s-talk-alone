import { createRouter, createWebHistory } from "vue-router";

// const LostInTheVoid = () => import("");
const Hello = () => import("../views/Hello.vue");
const Dino = () => import("../views/Dino.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Dino },
    { path: "/hello", name: "hello", component: Hello, props: true },
    // { path: "*", component: LostInTheVoid },
  ],
});

export default router;
