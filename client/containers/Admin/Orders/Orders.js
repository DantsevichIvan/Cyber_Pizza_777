import React from "react";
import s from "../Container.module.css";
import HeaderComponent from "../../../component/Admin/HeaderContainer/HeaderComponent";

const Orders = () => {
  return (
    <div className={s.container}>
      <HeaderComponent title={"Orders"} />
      <div className={s.wrap}>{}</div>
    </div>
  );
};

export default Orders;
