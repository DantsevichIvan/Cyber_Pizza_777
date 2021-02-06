import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import LogOut from "../../../containers/Auth/LogOut/LogOut";

const NavBar = ({isAuth, name}) => {
  return (
    <div className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_title}>
          <h2>Administrator</h2>
          {isAuth ? <span>{name}</span> : null}
        </div>
        <div className={s.header_links}>
          <NavLink to="/admin/categories">Categories</NavLink>
          <NavLink to="/admin/products">Products</NavLink>
        </div>
      </div>
      {isAuth ? <LogOut /> : null}
    </div>
  );
};

export default NavBar;
