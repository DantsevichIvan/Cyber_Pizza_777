import React, { useEffect, useState } from "react";
import HeaderHomePage from "../../component/Home/HomeHeader/HeaderHomePage";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../action/categoriesAction";
import { createCarts } from "../../action/cartsAction";
import HomeSideBar from "../../component/Home/HomeSideBar/HomeSideBar";
import s from "./HomePage.module.css";
import OrderStatusPage from "../../component/OrderStatusPage/OrderStatusPage";
import ModalWindow from "../../component/common/Modal/ModalWindow";
import CouponForm from "../../component/OrderStatusPage/Form/CouponForm";
import { Switch, Route } from "react-router-dom";

const HomeListProducts = React.lazy(() =>
  import("../../component/Home/HomeListProducts/HomeListProducts")
);

const HomePage = ({ match }) => {
  const [isOrderStatus, setIsOrderStatus] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  const [isModal, setIsModal] = useState(false);
  const categories = useSelector((state) => state.categories.categories);

  const openCloseCouponWindow = () => {
    setIsModal(!isModal);
  };
  useEffect(() => {
    dispatch(getCategories());
    dispatch(createCarts());
  }, [dispatch]);

  return (
    <div className={s.home_wrap}>
      <HomeSideBar categories={categories} />
      <div className={s.home_container}>
        <HeaderHomePage
          cartsProducts={cart.products}
          setIsOrderStatus={setIsOrderStatus}
        />
      </div>
      <Switch>
        {categories.map((el) => (
          <Route
            path={match.url + `:${el.name}`}
            key={el._id}
            component={HomeListProducts}
          />
        ))}
      </Switch>

      {isOrderStatus ? (
        <OrderStatusPage
          openCloseCouponWindow={openCloseCouponWindow}
          setIsOrderStatus={setIsOrderStatus}
        />
      ) : null}
      {isModal ? (
        <ModalWindow
          Component={CouponForm}
          openCloseModal={openCloseCouponWindow}
        />
      ) : null}
    </div>
  );
};

export default HomePage;
