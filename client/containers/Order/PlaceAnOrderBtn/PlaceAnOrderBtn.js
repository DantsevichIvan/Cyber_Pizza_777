import React, { useCallback, useEffect } from "react";
import s from "./PlaceAnOrderBtn.module.css";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import { createOrder } from "../../../action/orderAction";
import { useDispatch, useSelector } from "react-redux";

const PlaceAnOrderBtn = ({ cart }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const order_id = useSelector((state) => state.order.order.id);

  const createOrderStatus = useCallback(() => {
    let order = {
      products: cart.products,
      price: cart.total,
    };
    dispatch(createOrder(order));
  }, [dispatch, order_id]);
  const redirectPlaceOrder = async () => {
    await createOrderStatus();
  };

  if (order_id) {
    history.push(`/orders/${order_id}`);
  }
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
