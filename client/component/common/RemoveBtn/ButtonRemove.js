import React from "react";
import s from "./ButtonRemove.module.css";

const ButtonRemove = ({ remove, id }) => {
  return (
    <div className={s.close_container} onClick={() => remove(id)}>
      <div className={s.leftright}></div>
      <div className={s.rightleft}></div>
    </div>
  );
};

export default ButtonRemove;
