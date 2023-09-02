import HomePage from "@/pages/HomePage.vue";
import store from "@/store";

const appRoutes = [
  {
    path: "/",
    alias: "/home",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next("/shop");
      } else {
        next();
      }
    },
  },
];

export default appRoutes;