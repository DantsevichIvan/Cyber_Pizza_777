import React from "react";
import s from "./AddButton.module.css";

const AddButton = ({ value, method }) => {
  return (
    <div className={s.btn_Add}>
      <button className={`{s.iconBtn} + {s.addBtn}`} onClick={method}>
        <div className={s.addIcon}></div>
        <div className={s.btnTxt}>{value}</div>
      </button>
    </div>
  );
};

export default AddButton;
