import React, { useState } from "react";
import s from "./OrderStatusPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Formik } from "formik";

const OrderStatusPage = ({ setIsOrderStatus }) => {
  const cart = useSelector((state) => state.carts.cart);

  return (
    <Formik
      initialValues={{
        products: [] || cart.products,
        price: 0 || cart.price,
        discount: 0 || cart.discount,
      }}
      onSubmit={(values) => {}}
      validate={(values) => {}}
    >
      {({ values }) => (
        <form action="">
          <div className={s.container}>
            <div className={s.header}>
              <span>Order Status</span>
              <span onClick={() => setIsOrderStatus(false)}>
                Hide <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
            <div className={s.progress}></div>
            <div className={s.price}>
              <div className={s["price-wrap"]}>
                <div className={s["price-content"]}>
                  <span>Subtotal</span>
                  <span>$51.80</span>
                </div>
                <div className={s["price-content"]}>
                  <span>Discount {values.discount}%</span>
                  <span>$5.18</span>
                </div>
                <div className={s["price-total"]}>
                  <span>Total</span>
                  <span>${values.price}</span>
                </div>
              </div>
            </div>
            <div className={s.btn}></div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default OrderStatusPage;
