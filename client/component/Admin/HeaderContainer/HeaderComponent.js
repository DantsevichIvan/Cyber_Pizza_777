import React from "react";
import s from "./HeaderComponent.module.css";
import Button from "../../common/Buttons/Button/Button";

const HeaderComponent = ({ create, value, title }) => {
  return (
    <div className={s.container_header}>
      <h3>{title}</h3>
      {value ? (
        <Button method={create} title={value} classname={s["btn"]} />
      ) : null}
    </div>
  );
};

export default HeaderComponent;
