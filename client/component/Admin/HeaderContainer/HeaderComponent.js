import React from "react";
import AddButton from "../../common/AddBtn/AddButton";
import s from "./HeaderComponent.module.css";

const HeaderComponent = ({ create, value, title }) => {
  return (
    <div className={s.container_header}>
      <h3>{title}</h3>
      <AddButton method={create} value={value} />
    </div>
  );
};

export default HeaderComponent;
