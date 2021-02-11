import React, { useEffect, useState } from "react";
import s from "../Container.module.css";
import HeaderComponent from "../../../component/Admin/HeaderContainer/HeaderComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, getOrder } from "../../../action/orderAction";
import Order from "../../../component/Admin/Order/Order";
import ModalWindow from "../../../component/common/Modal/ModalWindow";
import OrderModal from "../../../component/Admin/Order/OrderModal/OrderModal";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const [isModal, setModal] = useState(false);
  const order = useSelector((state) => state.order.order);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const viewDetailsOrder = (id) => {
    dispatch(getOrder(id));
    openCloseModal();
  };
  const openCloseModal = () => setModal(!isModal);
  return (
    <div className={s.container}>
      <HeaderComponent title={"Orders"} />
      <div className={s.wrap}>
        {orders.map((order) => {
          return (
            <Order order={order} key={order._id} method={viewDetailsOrder} />
          );
        })}
      </div>
      {isModal ? (
        <ModalWindow
          Component={OrderModal}
          openCloseModal={openCloseModal}
          item={order}
        />
      ) : null}
    </div>
  );
};

export default Orders;
