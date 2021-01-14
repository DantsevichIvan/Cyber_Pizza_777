import React from "react";
import Tags from "../Tags/Tags";
import { faConciergeBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "./Header.module.css";

const HeaderHomePage = ({ cartsProducts }) => {
  return (
    <div className={s.header_home}>
      <div className={s.header_home_title}>
        <h3>CP</h3>
      </div>
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
        <div className={s.header_home_info_orderStatus}>
          <FontAwesomeIcon icon={faConciergeBell} />
          <span className={s.header_home_info_orderStatus_title}>
            Order Status
          </span>
          <span className={s.header_home_info_orderStatus_count}>
            {cartsProducts.length}
          </span>
        </div>
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
