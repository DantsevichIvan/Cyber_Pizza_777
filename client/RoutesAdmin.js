import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./action/authAction";
import s from "./containers/AdminContainers/AdminPage/Admin.module.css";
import NavBar from "./component/Admin/NavBar/NavBar";
import AuthRoute from "./component/AuthRouter/AuthRoute";
import { Switch } from "react-router-dom";

const Products = React.lazy(() =>
  import("./containers/AdminContainers/Products/Products")
);
const Categories = React.lazy(() =>
  import("./containers/AdminContainers/Categories/Categories")
);

const RoutesAdmin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, auth]);
  return (
    <div className={s.admin_wrap}>
      <NavBar />
      <div>
        <Switch>
          <AuthRoute path="/admin/products">
            <Products />
          </AuthRoute>
          <AuthRoute path="/admin/categories">
            <Categories />
          </AuthRoute>
        </Switch>
      </div>
    </div>
  );
};

export default RoutesAdmin;
