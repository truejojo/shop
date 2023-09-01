import appRoutes from "./app-routes";
import shopRoutes from "./shop-routes";
import notFoundRoutes from "./notFound-routes";

const routes = [...appRoutes, ...shopRoutes, ...notFoundRoutes];

export default routes;
