import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Products from "./containers/Admin/Products/Products";
import Categories from "./containers/Admin/Categories/Categories";
import { routes } from "./shared/constants";
import Orders from "./containers/Admin/Orders/Orders";
import { useSelector } from "react-redux";

const HomePage = React.lazy(() => import("./containers/Home/HomePage"));
const ProductPage = React.lazy(() =>
  import("./containers/Product/ProductPage")
);
const RoutesAdmin = React.lazy(() =>
  import("./containers/Admin/AdminPage/RoutesAdmin")
);
const Login = React.lazy(() => import("./containers/Auth/Login/Login"));
const Registration = React.lazy(() =>
  import("./containers/Auth/Registration/Registration")
);
const PlaceOrderPage = React.lazy(() =>
  import("./containers/PlaceOrder/PlaceOrderPage")
);
const OrderStatusPage = React.lazy(() =>
  import("./containers/OrderStatusPage/OrderStatusPage")
);

const marketplaceRoutes = [
  {
    path: routes.HOME,
    exact: true,
    component: HomePage,
    type: "auth",
  },
  {
    path: routes.CATEGORY,
    component: HomePage,
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
      {
        path: routes.ADMIN_ORDERS,
        component: Orders,
      },
    ],
  },
  {
    path: routes.PLACE_ORDER,
    component: PlaceOrderPage,
  },
  {
    path: routes.ORDER_STATUS,
    component: OrderStatusPage,
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
];

export function RouteWithSubRoutes(route) {
  const history = useHistory();
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  if (route.type === "auth" && isAdmin) {
    history.push("/admin");
  }
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
