import { createRouter, createWebHistory } from "vue-router";

// const LostInTheVoid = () => import("");
const Chat = () => import("../views/Chat.vue");
const Home = () => import("../views/Home.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/hello", name: "hello", component: Chat, props: true },
    // { path: "*", component: LostInTheVoid },
  ],
});

export default router;
