import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../action/authAction";
import NavBar from "../NavBar";
import "../style/Admin.css";
import AuthRoute from "../component/AuthRoute";
import { Route, Switch } from "react-router-dom";
import Products from "./Products";

const AdminPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, auth]);

  return (
    <div className="admin_wrap">
      <NavBar />
      <div>
        <Switch>
          <Route path="/admin/products" component={Products} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminPage;
