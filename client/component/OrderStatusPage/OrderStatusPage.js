import React from "react";
import s from "./OrderStatusPage.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const OrderStatusPage = ({ setIsOrderStatus }) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <span>Order Status</span>
        <span onClick={() => setIsOrderStatus(false)}>
          Hide <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <div className={s.progress}></div>
      <div className={s.price}>
        <div className={s["price-wrap"]}>
          <div className={s["price-content"]}>
            <span>Subtotal</span>
            <span>$51.80</span>
          </div>
          <div className={s["price-content"]}>
            <span>Discount -10%</span>
            <span>$5.18</span>
          </div>
          <div className={s["price-total"]}>
            <span>Total</span>
            <span>$46.62</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusPage;
