import React from "react";
import ButtonRemove from "../../common/RemoveBtn/ButtonRemove";
import s from "./Category.module.css";

const Category = ({ category, updateCategory, removeCategory }) => {
  return (
    <div className={s.item}>
      <div className={s.item_content}>
        <span className={s.textInfo_name}>{category.name}</span>
      </div>
      <div className={s.btns}>
        <button
          className={s.item_btnAdd}
          onClick={() => updateCategory(category)}
        >
          update
        </button>
        <ButtonRemove remove={removeCategory} id={category._id} />
      </div>
    </div>
  );
};

export default Category;
