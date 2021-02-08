import React, { useEffect, useState } from "react";
import s from "./OrderStatusPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import OrderPrice from "../../component/OrderStatusPage/OrderPrice/OrderPrice";
import OrderProgressTitle from "../../component/OrderStatusPage/OrderProgressTitle/OrderProgressTitle";
import OrderProgressContainer from "../../component/OrderStatusPage/OrderProgressContainer/OrderProgressContainer";
import {
  deleteProductToCart,
  updateProductToCart,
} from "../../action/cartsAction";
import PlaceAnOrderBtn from "./PlaceAnOrderBtn/PlaceAnOrderBtn";
import Button from "../../component/common/Buttons/Button/Button";

const OrderStatusPage = ({ setIsOrderStatus, openCloseCouponWindow }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  const status = useSelector((state) => state.order.order.status);

  const removeProduct = (id, product) => {
    let [id_Cart, id_Prod] = [cart.id, id];
    if (product.count > 1) {
      dispatch(updateProductToCart(id_Cart, id_Prod, product));
    } else {
      dispatch(deleteProductToCart(id_Cart, id_Prod));
    }
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <span>Order Status</span>
        <span className={s.link} onClick={() => setIsOrderStatus(false)}>
          Hide <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>

      <div className={s.progress}>
        <div className={s["progress-container"]}>
          <OrderProgressTitle title={"Ordered"} />
          <div className={s["list-products"]}>
            {cart.products.map((product, index) => (
              <div key={index}>
                <OrderProgressContainer
                  product={product}
                  remove={removeProduct}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={s["btn"]}>
          <Button
            disabled={cart.discount}
            classname={s["coupon-btn"]}
            title={"Add Coupon"}
            method={openCloseCouponWindow}
          />
        </div>
      </div>

      <OrderPrice values={cart} />

      <div className={s.btn}>
        <PlaceAnOrderBtn />
      </div>
    </div>
  );
};

export default OrderStatusPage;
