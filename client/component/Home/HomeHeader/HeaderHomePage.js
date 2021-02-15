import React from "react";
import s from "./Header.module.css";
import OrderStatus from "../../common/OrderStatus/OrderStatus";

const HeaderHomePage = ({ cartsProducts, setIsOrderStatus, status,openClose,isStatus }) => {
  return (
    <div className={s.header_home}>
      <div className={s.header_home_info}>
        <div className={s.header_home_info_filter}>
          {
            status === 'Accept'? <button onClick={()=>openClose(!isStatus)}>Status Order</button> : null
          }
        </div>
        <OrderStatus
          cartsProducts={cartsProducts}
          setIsOrderStatus={setIsOrderStatus}
        />
      </div>
    </div>
  );
};

export default HeaderHomePage;
