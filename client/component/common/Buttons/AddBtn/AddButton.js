import React from "react";
import s from "./AddButton.module.css";

const AddButton = ({ value, method }) => {
  return (
    <div className={s.btn_Add}>
      <button className={s["icon-btn"] + s["add-btn"]} onClick={method}>
        <div className={s["add-icon"]}></div>
        <div className={s["btn-txt"]}>{value}</div>
      </button>
    </div>
  );
};

export default AddButton;
