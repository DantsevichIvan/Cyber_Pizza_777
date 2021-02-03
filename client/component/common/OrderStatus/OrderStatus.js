import React, { useEffect } from "react";
import s from "../../Home/HomeHeader/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConciergeBell } from "@fortawesome/free-solid-svg-icons";

const OrderStatus = ({ cartsProducts, setIsOrderStatus }) => {
  const sumCount = (arr) => {
    let count = 0;
    arr.forEach(function (value) {
      count += +value.count;
    });
    return count;
  };

  return (
    <div className={s.header_home_info_orderStatus}>
      <div className={s.icon}>
        <FontAwesomeIcon icon={faConciergeBell} />
      </div>
      <span
        className={s.header_home_info_orderStatus_title}
        onClick={() => {
          setIsOrderStatus(true);
        }}
      >
        Order Status
      </span>
      <span className={s.header_home_info_orderStatus_count}>
        {sumCount(cartsProducts)}
      </span>
    </div>
  );
};

export default OrderStatus;
