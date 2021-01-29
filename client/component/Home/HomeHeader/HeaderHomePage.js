import React from "react";
import Tags from "../Tags/Tags";
import s from "./Header.module.css";
import OrderStatus from "../../common/OrderStatus/OrderStatus";

const HeaderHomePage = ({ cartsProducts }) => {
  return (
    <div className={s.header_home}>
      <div className={s.header_home_info}>
        <div className={s.header_home_info_filter}>
          <div className={s.header_home_info_filter_title}>
            <span>Filters</span>
          </div>
          <div className={s.header_home_info_filter_container}>
            <div className={s.header_home_info_filter_tags}>
              <Tags />
              <Tags />
            </div>
            <button className={s.header_home_info_filter_btn}>
              All filters
            </button>
          </div>
        </div>
        <OrderStatus cartsProducts={cartsProducts} />
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
