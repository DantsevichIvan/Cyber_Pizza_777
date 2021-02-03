import React from "react";
import s from "../PlaceOrderPage.module.css";

const Product = ({ product }) => {
  return (
    <div className={s["product-wrap"]}>
      <div className={s["product-content"]}>
        <span>{product.name}</span>
      </div>
      <div className={s["product-count"]}>
        <span>{product.count}</span>
      </div>
    </div>
  );
};

export default Product;
