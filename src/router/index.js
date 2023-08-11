import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import CatalogPage from "@/pages/CatalogPage.vue";
import CartPage from "@/pages/CartPage.vue";

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
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
