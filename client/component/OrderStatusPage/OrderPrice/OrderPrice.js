import React from "react";
import s from "../OrderStatusPage.module.css";

const OrderPrice = ({ values }) => {
  return (
    <div className={s.price}>
      <div className={s["price-wrap"]}>
        <div className={s["price-content"]}>
          <span>Subtotal</span>
          <span>${values.subtotal}</span>
        </div>
        <div className={s["price-content"]}>
          <span>Discount {values.discount}%</span>
          <span>${(values.subtotal / 100) * values.discount}</span>
        </div>
        <div className={s["price-total"]}>
          <span>Total</span>
          <span>${values.total}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderPrice;
