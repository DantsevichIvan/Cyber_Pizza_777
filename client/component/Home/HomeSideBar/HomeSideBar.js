import React from "react";
import { Link } from "react-router-dom";
import s from "./HomeSideBar.module.css";

const HomeSideBar = ({ categories, activeIndex, handleClick }) => {
  return (
    <div className={s.home_list_categories}>
      <div>
        <div className={s.home_list_categories_title}>
          <span>categories</span>
        </div>
        <div className={s.home_list_categories_items}>
          {categories.map((item, index) => {
            const cn =
              activeIndex === index
                ? s.active_item
                : s.home_list_categories_item;
            return (
              <span
                className={cn}
                key={index}
                onClick={() => handleClick(index, item._id)}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>
      <div className={s.home_list_categories_link}>
        <Link to="#">Login</Link>
      </div>
    </div>
  );
};

export default HomeSideBar;
