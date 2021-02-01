import React from "react";
import Tags from "../Tags/Tags";
import s from "./Header.module.css";
import OrderStatus from "../../common/OrderStatus/OrderStatus";
import HomeSideBar from "../HomeSideBar/HomeSideBar";

const HeaderHomePage = ({ cartsProducts, setIsOrderStatus }) => {
  return (
    <div className={s.header_home}>
      <div className={s.header_home_info}>
        <div className={s.header_home_info_filter}>
          <div className={s.header_home_info_filter_title}>
            <span>Filters</span>
          </div>
          <div className={s.header_home_info_filter_container}>
            <div className={s.header_home_info_filter_tags}></div>
            <button className={s.header_home_info_filter_btn}>
              All filters
            </button>
          </div>
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
// /}
//   {/*  tags.map((item)=>{*/}
//   {/*   return <Tags/>*/}
//   {/*  })*/}
//   {/*}
