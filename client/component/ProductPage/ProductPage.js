import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import OrderStatus from "../common/OrderStatus/OrderStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import s from "./ProductPage.module.css";

const toppings = [
  "Roast Beef",
  "Bell Peppers",
  "Mushrooms",
  "Onions",
  "Tomatoes",
  "Marinara",
];

const ProductPage = () => {
  const products = [];
  const [count, setCount] = useState(1);

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
            <span className={s.title}>Size</span>
            <div className={s["form_radio_group"]}>
              <div className={s["form_radio_group-item"]}>
                <input id="radio-1" type="radio" name="radio" value="1" />
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
          <div className={s.toppings}>
            <span className={s.title}>Toppings</span>
            <div className={s.toppingsWrap}>
              {toppings.map((el) => {
                return (
                  <div className={s.topping}>
                    <span>{el}</span>
                  </div>
                );
              })}
            </div>
            <div className={s.addTopping}>
              <span>+ More Toppings</span>
            </div>
          </div>
          <div className={s.price}>
            <span className={s.priceValue}>${(13.4 * count).toFixed(1)}</span>
            <div className={s.priceWrap}>
              <div className={s.priceCount}>
                <button
                  disabled={count === 1}
                  onClick={() => setCount(count - 1)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{count}</span>
                <button
                  onClick={() => setCount(count + 1)}
                  disabled={count === 10}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
          <button className={s.btn}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
