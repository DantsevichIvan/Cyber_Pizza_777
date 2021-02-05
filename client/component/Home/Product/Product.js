import React from "react";
import s from "../../../containers/HomeContainers/HomePage.module.css";
import { NavLink } from "react-router-dom";
import not_image from "../../../images/not-img.png";

const Product = ({ product, addProductForCarts }) => {
  debugger;
  return (
    <div className={s.item_product}>
      <div className={s.item_product_img}>
        <NavLink to={`/product/` + product._id}>
          <img src={product.image ? product.image : not_image} alt="" />
        </NavLink>
        <div className={s.item_product_btn_Add}>
          <button
            className="icon-btn add-btn"
            onClick={() => addProductForCarts(product)}
          >
            +
          </button>
        </div>
      </div>
      <div className={s.item_product_price}>
        <span>${product.price}</span>
      </div>
      <div className={s.item_product_name}>
        <NavLink to={"/product/" + product._id}>
          <span>{product.name}</span>
        </NavLink>
      </div>
      <div className={s.item_product_description}>
        <span>{product.description}</span>
      </div>
    </div>
  );
};

export default Product;
