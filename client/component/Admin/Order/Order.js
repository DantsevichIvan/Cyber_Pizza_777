import React from "react";
import s from "./Order.module.css";
import Button from "../../common/Buttons/Button/Button";

const Order = ({ order, method }) => {
  return (
    <div className={s.items}>
      <div className={s.item}>
        <span className={s.title}>Product Quantity:</span>
        <span className={s.value}>{order.products.length}</span>
      </div>
      <div className={s.item}>
        <span className={s.title}>The Price of the Order:</span>
        <span className={s.value}>{order.price}</span>
      </div>
      <div className={s.item}>
        <span className={s.title}>Order Status:</span>
        <span className={s.value}>{order.status}</span>
      </div>
      <Button
        method={method}
        value={order._id}
        title={"View Details"}
        classname={s["btn"]}
      />
    </div>
  );
};

export default Order;
