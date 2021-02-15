import React, { useCallback } from "react";
import s from "./PlaceAnOrderBtn.module.css";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import { createOrder } from "../../../action/orderAction";
import { useDispatch } from "react-redux";

const PlaceAnOrderBtn = ({ cart }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const createOrderStatus = useCallback(() => {
    let order = {
      products: cart.products,
      price: cart.total,
    };
    dispatch(createOrder(order));
  }, [dispatch]);

  const redirectPlaceOrder = async () => {
    await createOrderStatus();
    history.push(`/orders/`);
  };
  return (
    <button className={s["learn-more"]} disabled={!cart.products.length} onClick={redirectPlaceOrder}>
      <span className={s["circle"]} aria-hidden="true">
        <span className={cn(s["icon"], s["arrow"])}> </span>
      </span>
      <span className={s["button-text"]}>Place an Order</span>
    </button>
  );
};

export default PlaceAnOrderBtn;
