import React from "react";
import s from "./PlaceAnOrderBtn.module.css";
import cn from "classnames";
import { useHistory } from "react-router-dom";

const PlaceAnOrderBtn = () => {
  const history = useHistory();

  const redirectPlaceOrder = () => {
    history.push("/place_order");
  };
  return (
    <button className={s["learn-more"]} onClick={redirectPlaceOrder}>
      <span className={s["circle"]} aria-hidden="true">
        <span className={cn(s["icon"], s["arrow"])}> </span>
      </span>
      <span className={s["button-text"]}>Place an Order</span>
    </button>
  );
};

export default PlaceAnOrderBtn;
