import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../action/authAction";
import s from "./Admin.module.css";
import NavBar from "../../../component/Admin/NavBar/NavBar";
import { Redirect, Switch, useHistory } from "react-router-dom";
import { RouteWithSubRoutes } from "../../../Routes";

const RoutesAdmin = ({ routes }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  const userId = useSelector((state) => state.auth.id);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const name = useSelector((state) => state.auth.name);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, auth]);

  if (!isAdmin || !isAuth) {
    history.push("/");
  }
  return (
    <div className={s.admin_wrap}>
      <NavBar isAuth={isAuth} name={name} />
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
