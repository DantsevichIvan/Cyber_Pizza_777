import React from "react";
import s from "../OrderStatusPage.module.css";

const OrderProgressTitle = ({ title, time, className }) => {
  return (
    <div className={s.progressTitle}>
      <h2 className={className}>{title}</h2>
      <span>{time}</span>
    </div>
  );
};

export default OrderProgressTitle;
