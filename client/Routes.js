import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import AuthRoute from "./component/AuthRoute";

const HomePage = React.lazy(() => import("./containers/HomePage"));
const AdminPage = React.lazy(() => import("./containers/AdminPage"));
const Products = React.lazy(() => import("./containers/Products"));
const Categories = React.lazy(() => import("./containers/Categories"));
const Login = React.lazy(() => import("./containers/Login"));
const Info = React.lazy(() => import("./containers/Info"));
const Registration = React.lazy(() => import("./containers/Registration"));
const LogOut = React.lazy(() => import("./containers/LogOut"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/admin" component={AdminPage} />
      <AuthRoute path="/admin/products">
        <Products />
      </AuthRoute>
      <AuthRoute path="/admin/categories">
        <Categories />
      </AuthRoute>

      <Route path="/admin/login" component={Login} />
      <Route path="/admin/info" component={Info} />
      <Route path="/admin/registration" component={Registration} />
      <Route path="/admin/logout" component={LogOut} />
    </Switch>
  );
};

export default Routes;
