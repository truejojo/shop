import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ShopPage from "../pages/ShopPage.vue";
import CreateProductPage from "../pages/CreateProductPage.vue";
import ReadProductPage from "../pages/ReadProductPage.vue";

import store from "../store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuthenticated) {
          next("/shop");
        } else {
          next();
        }
      },
    },
    {
      path: "/shop",
      component: ShopPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/shop/create/product",
      component: CreateProductPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/shop/read/product/:id",
      component: ReadProductPage,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
