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
const RoutesAdmin = React.lazy(() =>
  import("./containers/AdminContainers/AdminPage/RoutesAdmin")
);

const Login = React.lazy(() =>
  import("./containers/AuthContainers/Login/Login")
);
const Registration = React.lazy(() =>
  import("./containers/AuthContainers/Registration/Registration")
);
const PlaceOrderPage = React.lazy(() =>
  import("./component/PlaceOrderPage/PlaceOrderPage")
);

const marketplaceRoutes = [
  {
    path: routes.PLACE_ORDER,
    component: PlaceOrderPage,
    exact: true,
  },
  {
    path: routes.PRODUCT,
    exact: true,
    component: ProductPage,
  },
  {
    path: routes.HOME,
    exact: true,
    component: HomePage,
  },
  {
    path: routes.REGISTER,
    component: Registration,
    exact: true,
  },
  {
    path: routes.SIGN_IN,
    component: Login,
    exact: true,
  },

  {
    path: routes.ADMIN,
    component: RoutesAdmin,
    exact: true,
    routes: [
      {
        path: routes.ADMIN_PRODUCTS,
        component: Products,
        exact: true,
      },
      {
        path: routes.ADMIN_CATEGORIES,
        component: Categories,
        exact: true,
      },
    ],
  },
];

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
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
