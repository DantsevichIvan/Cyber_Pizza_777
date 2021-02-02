import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../action/authAction";
import s from "./Admin.module.css";
import NavBar from "../../../component/Admin/NavBar/NavBar";
import { Redirect, Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../../Routes";

const RoutesAdmin = ({ routes }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, auth]);

  if (isAdmin === false) {
    return <Redirect to="/" />;
  }
  return (
    <div className={s.admin_wrap}>
      <NavBar />
      <div className={s.container}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  );
};
export default RoutesAdmin;
