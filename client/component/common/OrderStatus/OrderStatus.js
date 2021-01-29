import React from "react";
import s from "../../Home/HomeHeader/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConciergeBell } from "@fortawesome/free-solid-svg-icons";

const OrderStatus = ({ cartsProducts }) => {
  return (
    <div className={s.header_home_info_orderStatus}>
      <div className={s.icon}>
        <FontAwesomeIcon icon={faConciergeBell} />
      </div>
      <span className={s.header_home_info_orderStatus_title}>Order Status</span>
      <span className={s.header_home_info_orderStatus_count}>
        {cartsProducts.length}
      </span>
    </div>
  );
};

export default OrderStatus;
