import React from "react";
import { Switch, Route } from "react-router-dom";

const HomePage = React.lazy(() =>
  import("./containers/HomeContainers/HomePage")
);
const ProductPage = React.lazy(() =>
  import("./component/ProductPage/ProductPage")
);
const OrderStatusPage = React.lazy(() =>
  import("./component/OrderStatusPage/OrderStatusPage")
);
const RoutesAdmin = React.lazy(() => import("./RoutesAdmin"));

const Login = React.lazy(() =>
  import("./containers/AuthContainers/Login/Login")
);
const Registration = React.lazy(() =>
  import("./containers/AuthContainers/Registration/Registration")
);
const Products = React.lazy(() =>
  import("./containers/AdminContainers/Products/Products")
);
const Categories = React.lazy(() =>
  import("./containers/AdminContainers/Categories/Categories")
);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:prodId?" component={ProductPage} />

      <Route exact path="/admin" component={RoutesAdmin} />

      <Route path="/admin/login" component={Login} />
      <Route path="/admin/registration" component={Registration} />
    </Switch>
  );
};

export default Routes;
