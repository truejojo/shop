const shopRoutes = [
  {
    path: "/shop",
    component: () => import("../../pages/ShopPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shop/create/product",
    component: () => import("../../pages/CreateProductPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shop/read/product/:id",
    name: "ReadProductPage",
    component: () => import("../../pages/ReadProductPage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
];

export default shopRoutes;
