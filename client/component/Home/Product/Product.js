import React from "react";
import s from "../../../containers/HomeContainers/HomePage.module.css";

const Product = () => {
  return (
    <div className={s.item_product}>
      <div className={s.item_product_img}>
        <img
          src="https://www.pizzatempo.by/i/photo/catalog/products/t/r_99_280x280.jpg?v=1605510590"
          alt=""
        />
        <div className={s.item_product_btn_Add}>
          <button className="icon-btn add-btn">+</button>
        </div>
      </div>
      <div className={s.item_product_price}>
        <span>
          <span>price</span>
        </span>
      </div>
      <div className={s.item_product_name}>
        <span>Name</span>
      </div>
      <div className={s.item_product_description}>
        <span>Description</span>
      </div>
    </div>
  );
};

export default Product;
