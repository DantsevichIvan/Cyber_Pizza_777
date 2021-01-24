import React from "react";
import { NavLink } from "react-router-dom";
import OrderStatus from "../common/OrderStatus/OrderStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import s from "./ProductPage.module.css";
import { Form } from "formik";

const ProductPage = () => {
  const products = [];

  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.linkBack}>
          <NavLink to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Menu
          </NavLink>
        </div>
        <OrderStatus cartsProducts={products} />
      </div>
      <div className={s.container}>
        <div className={s.img}>
          <img src="" alt="" />
        </div>
        <div className={s.infoProduct}>
          <div className={s.name}>
            <span>Name</span>
          </div>
          <div className={s.description}>
            <p>Description</p>
          </div>
          <div className={s.size}>
            <span>Size</span>
            <div className={s["form_radio_group"]}>
              <div className={s["form_radio_group-item"]}>
                <input
                  id="radio-1"
                  type="radio"
                  name="radio"
                  value="1"
                  checked
                />
                <label htmlFor="radio-1">
                  Small <span>320g</span>
                </label>
              </div>
              <div className={s["form_radio_group-item"]}>
                <input id="radio-2" type="radio" name="radio" value="2" />
                <label htmlFor="radio-2">
                  Medium <span>530g</span>
                </label>
              </div>
              <div className={s["form_radio_group-item"]}>
                <input id="radio-3" type="radio" name="radio" value="3" />
                <label htmlFor="radio-3">
                  Large <span>860g</span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <span>Toppings</span>
          </div>
          <div>
            <span>Price</span>
          </div>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
