import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getStatus } from "../../action/orderAction";
import s from "./OrderStatusPage.module.css";
import ButtonBack from "../../component/common/Buttons/ButtonBack/ButtonBack";
import { deleteCart } from "../../action/cartsAction";

const OrderStatusPage = () => {
  const { order_id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector((state) => state.order.order.status);
  const order = useSelector((state) => state.order.order);
  const cart_id = useSelector((state) => state.carts.cart.id);

  useEffect(() => {
    if (order_id){
      const intervalStatus = setInterval(() => {
        dispatch(getStatus(order_id));
      }, 1000);
      if (status === 'Pending'){
        return () => {
          clearInterval(intervalStatus);
        };
      }
    }
  }, [status]);

  const back = () => {
    dispatch(deleteCart(cart_id));
    history.push(`/`);
  };

  return status === "Pending" ? (
    <div className={s.wrap}>
      <div className={s.container}>
        <ButtonBack goBack={back} title={"Home"} classname={s["btn"]} />
        <h2>The order is accepted and processed</h2>
      </div>
    </div>
  ) : status === "Accept" ? (
    <div className={s.wrap}>
      <div className={s.container}>
        <ButtonBack goBack={back} title={"Home"} classname={s["btn"]} />
        <div className={s.header}>
          <h2>Your order is accepted</h2>
        </div>
        <div className={s["order-number"]}>
          <span className={s.title}>Number Order:</span>
          <span className={s.value}>{order.order_number}</span>
        </div>
        <div className={s["order-list"]}>
          <span className={s.title}>List Order:</span>
          <div className={s["products"]}>
            {order.products.map((product) => (
              <div className={s["product"]}>
                <span className={s["product-title"]}>x{product.count}</span>
                <span className={s["product-value"]}>{product.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={s["order-price"]}>
          <span className={s.title}>Price Order:</span>
          <span className={s.value}>${order.price}</span>
        </div>
      </div>
    </div>
  ) : null;
};

export default OrderStatusPage;
