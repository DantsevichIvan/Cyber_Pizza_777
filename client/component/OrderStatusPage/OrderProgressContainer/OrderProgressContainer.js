import React from "react";
import s from "../../../containers/Order/OrderStatusPage.module.css";
import ButtonRemove from "../../common/Buttons/RemoveBtn/ButtonRemove";

const OrderProgressContainer = ({ product, remove }) => {
  return (
    <div className={s["product-wrap"]}>
      <div className={s["product-content"]}>
        <img src={product.image} alt="" />
        <span>{product.name}</span>
      </div>
      <div className={s["product-count"]}>
        <span>{product.count}</span>
        <ButtonRemove
          classNameRoot={s["product-delete"]}
          classNameLeft={s["product-delete-left"]}
          classNameRight={s["product-delete-right"]}
          id={product._id}
          product={product}
          remove={remove}
        />
      </div>
    </div>
  );
};

export default OrderProgressContainer;
