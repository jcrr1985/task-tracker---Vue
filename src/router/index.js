import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router