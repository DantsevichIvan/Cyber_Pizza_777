import React from "react";
import s from "../OrderStatusPage.module.css";

const OrderPrice = ({ subtotal, values }) => {
  return (
    <div className={s.price}>
      <div className={s["price-wrap"]}>
        <div className={s["price-content"]}>
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className={s["price-content"]}>
          <span>Discount {values.discount}%</span>
          <span>${(subtotal / 100) * values.discount}</span>
        </div>
        <div className={s["price-total"]}>
          <span>Total</span>
          <span>${subtotal - (subtotal / 100) * values.discount}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderPrice;
