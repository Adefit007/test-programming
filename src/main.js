import { createApp } from "vue";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import HomeItem from "./components/HomeItem.vue";
import HomeCustomer from "./components/CustomerPage.vue";
import { createRouter, createWebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/item",
    component: HomeItem,
  },
  {
    path: "/customer",
    component: HomeCustomer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
});

const app = createApp(App);
app.use(router);
app.mount("#app");
