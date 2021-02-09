import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getStatus } from "../../action/orderAction";
import s from "./OrderStatusPage.module.css";
import ButtonBack from "../../component/common/Buttons/ButtonBack/ButtonBack";

const OrderStatusPage = () => {
  const { order_id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector((state) => state.order.order.status);

  useEffect(() => {
    dispatch(getStatus(order_id));
  });
  const back = () => history.push(`/`);

  //
  return status === "The order is accepted and processed" ? (
    <div className={s.wrap}>
      <div className={s.container}>
        <ButtonBack goBack={back} title={"Home"} classname={s["btn"]} />
        <h2>The order is accepted and processed</h2>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default OrderStatusPage;
