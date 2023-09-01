const shopRoutes = [
  {
    path: "/shop",
    component: () => import("../../layouts/TheShopLayout.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        component: () => import("../../pages/ShopPage.vue"),
      },
      {
        path: "create/product",
        component: () => import("../../pages/CreateProductPage.vue"),
      },
      {
        path: "read/product/:id",
        name: "ReadProductPage",
        component: () => import("../../pages/ReadProductPage.vue"),
        props: true,
      },
    ],
  },
];

export default shopRoutes;

// {
//   path: "/shop",
//   component: () => import("../../pages/ShopPage.vue"),
//   meta: {
//     requiresAuth: true,
//   },
// },
// {
//   path: "/shop/create/product",
//   component: () => import("../../pages/CreateProductPage.vue"),
//   meta: {
//     requiresAuth: true,
//   },
// },
// {
//   path: "/shop/read/product/:id",
//   name: "ReadProductPage",
//   component: () => import("../../pages/ReadProductPage.vue"),
//   props: true,
//   meta: {
//     requiresAuth: true,
//   },
// },
