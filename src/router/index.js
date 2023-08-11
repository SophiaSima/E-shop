import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import CatalogPage from "@/pages/CatalogPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
