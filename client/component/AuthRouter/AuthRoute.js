import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getUser } from "../../action/authAction";

const AuthRoute = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  debugger;
  if (isAuth) {
    if (!isAdmin) {
      return <Redirect to="/" />;
    }
  } else if (!isAuth) return <Redirect to="/admin/login" />;

  return <Route {...props} />;
};

export default AuthRoute;
