import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./containers/AdminContainers/Products/Products";
import Categories from "./containers/AdminContainers/Categories/Categories";
import { routes } from "./shared/constants";

const HomePage = React.lazy(() =>
  import("./containers/HomeContainers/HomePage")
);
const ProductPage = React.lazy(() =>
  import("./component/ProductPage/ProductPage")
);
const RoutesAdmin = React.lazy(() => import("./RoutesAdmin"));

const Login = React.lazy(() =>
  import("./containers/AuthContainers/Login/Login")
);
const Registration = React.lazy(() =>
  import("./containers/AuthContainers/Registration/Registration")
);

const marketplaceRoutes = [
  {
    path: routes.HOME,
    exact: true,
    component: HomePage,
  },
  {
    path: routes.PRODUCT,
    component: ProductPage,
  },
  {
    path: routes.REGISTER,
    component: Registration,
  },
  {
    path: routes.SIGN_IN,
    component: Login,
  },
  {
    path: routes.ADMIN,
    component: RoutesAdmin,
    routes: [
      {
        path: routes.ADMIN_PRODUCTS,
        component: Products,
      },
      {
        path: routes.ADMIN_CATEGORIES,
        component: Categories,
      },
    ],
  },
];

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

const Routes = () => {
  return (
    <Switch>
      {marketplaceRoutes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
