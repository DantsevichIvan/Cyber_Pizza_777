import React from "react";
import ButtonRemove from "../../common/RemoveBtn/ButtonRemove";
import s from "./Product.module.css";

const Product = ({ removeProduct, product, updateProduct }) => {
  return (
    <div className={s.item}>
      <div className={s.item_info}>
        <img src={product.image} alt="" />
        <div className={s.textInfo}>
          <span className={s.textInfo_name}>{product.name}</span>
          <span className={s.textInfo_description}>{product.description}</span>
        </div>
      </div>
      <span className={s.info}>
        Weight:<span>{product.weight}</span>
      </span>
      <span className={s.info}>
        Price:<span>{product.price}</span>
      </span>
      <div className={s.btns}>
        <button
          className={s.item_btnAdd}
          onClick={() => updateProduct(product)}
        >
          update
        </button>
        <ButtonRemove remove={removeProduct} id={product._id} />
      </div>
    </div>
  );
};

export default Product;
