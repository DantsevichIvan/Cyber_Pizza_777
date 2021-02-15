import React, { useEffect, useState } from "react";
import HeaderHomePage from "../../component/Home/HomeHeader/HeaderHomePage";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../action/categoriesAction";
import { createCarts } from "../../action/cartsAction";
import HomeSideBar from "../../component/Home/HomeSideBar/HomeSideBar";
import s from "./HomePage.module.css";
import OrderStatusPage from "../Order/OrderStatusPage";
import ModalWindow from "../../component/common/Modal/ModalWindow";
import CouponForm from "../Order/Form/CouponForm";
import HomeListProducts from "./HomeListProducts/HomeListProducts";
import { useParams } from "react-router-dom";
import { getUser } from "../../action/authAction";
import OrderStatusForm from "./OrderStatusForm/OrderStatusForm";

const HomePage = () => {
  const { name } = useParams();
  const [isOrderStatus, setIsOrderStatus] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  const status = useSelector((state) => state.order.order.status);
  const [isModal, setIsModal] = useState(false);
  const categories = useSelector((state) => state.categories.categories);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userId = useSelector((state) => state.auth.id);


  const openCloseCouponWindow = () => {
    setIsModal(!isModal);
  };
  useEffect(() => {
    dispatch(getCategories());
    dispatch(createCarts());
    dispatch(getUser(userId));
  }, [dispatch]);

  return (
    <div className={s.home_wrap}>
      <HomeSideBar categories={categories} isAuth={isAuth} />
      <div className={s.home_container}>
        <HeaderHomePage
          cartsProducts={cart.products}
          setIsOrderStatus={setIsOrderStatus}
          status={status}
          openClose={setIsStatus}
          isStatus={isStatus}
        />
        <HomeListProducts category={name} />
      </div>
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
      {isStatus?(
        <ModalWindow
          Component={OrderStatusForm}
          openCloseModal={()=>setIsStatus(false)}
        />
      ):null}
    </div>
  );
};

export default HomePage;
