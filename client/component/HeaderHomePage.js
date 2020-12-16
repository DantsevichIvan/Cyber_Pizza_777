import React from "react";
import Tags from "./Tags";
import { faConciergeBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderHomePage = ({}) => {
  return (
    <div className="header_home">
      <div className="header_home_title">
        <h3>CP</h3>
      </div>
      <div className="header_home_info">
        <div className="header_home_info_filter">
          <div className="header_home_info_filter_title">
            <span>Filters</span>
          </div>
          <div className="header_home_info_filter_container">
            <div className="header_home_info_filter_tags">
              <Tags />
              <Tags />
            </div>
            <button className="header_home_info_filter_btn">All filters</button>
          </div>
        </div>
        <div className="header_home_info_orderStatus">
          <FontAwesomeIcon icon={faConciergeBell} />
          <span className="header_home_info_orderStatus_title">
            Order Status
          </span>
          <span className="header_home_info_orderStatus_count">4</span>
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
