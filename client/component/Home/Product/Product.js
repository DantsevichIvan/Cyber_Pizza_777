import React from "react";
import s from "../../../containers/HomeContainers/HomePage.module.css";
import { NavLink } from "react-router-dom";

const Product = ({ addProductForCarts }) => {
  const product = { _id: "fdssgj12334" };
  return (
    <div className={s.item_product}>
      <div className={s.item_product_img}>
        <NavLink to={"/product/" + product._id}>
          <img
            src="https://www.pizzatempo.by/i/photo/catalog/products/t/r_99_280x280.jpg?v=1605510590"
            alt=""
          />
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
        <span>
          <span>price</span>
        </span>
      </div>
      <div className={s.item_product_name}>
        <NavLink to={"/product/" + product._id}>
          <span>Name</span>
        </NavLink>
      </div>
      <div className={s.item_product_description}>
        <span>Description</span>
      </div>
    </div>
  );
};

export default Product;
