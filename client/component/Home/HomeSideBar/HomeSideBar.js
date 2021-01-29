import React from "react";
import { Link } from "react-router-dom";
import s from "./HomeSideBar.module.css";
import { useSelector } from "react-redux";
import LogOut from "../../../containers/AuthContainers/LogOut/LogOut";

const HomeSideBar = ({ categories, activeIndex, handleClick }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div className={s.home_list_categories}>
      <div className={s.side_bar_title}>
        <h3>CP</h3>
      </div>
      <div className={s.side_bar_container}>
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
          {isAuth ? <LogOut /> : <Link to="/admin/login">Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default HomeSideBar;
