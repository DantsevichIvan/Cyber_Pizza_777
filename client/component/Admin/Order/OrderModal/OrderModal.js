import React from "react";
import Button from "../../../common/Buttons/Button/Button";
import s from "./OrderModal.module.css";

const OrderModal = ({ item, closeModal }) => {
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <h2>Order</h2>
        <Button
          method={closeModal}
          title={"Close"}
          classname={s["btn-close"]}
        />
      </div>
      <div className={s.container}>
        <div className={s.status}>
          <span className={s["title"]}>Status Order:</span>
          <span className={s["value"]}>{item.status}</span>
        </div>
        <div className={s["products"]}>
          <span className={s["title"]}>Products:</span>
          <div>
            {item.products.map((el) => (
              <div className={s["product"]}>
                <span className={s["title"]}>{el.name}</span>
                <span className={s["value"]}>{el.count}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className={s["title"]}>Price Order:</span>
          <span className={s["value"]}>{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
