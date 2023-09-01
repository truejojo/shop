const notFoundRoutes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: () => import("../../pages/NotFoundPage.vue"),
    // redirect: "/",
  },
];

export default notFoundRoutes;
