import React, { useEffect, useState } from "react";
import s from "./OrderStatusPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import OrderPrice from "./OrderPrice/OrderPrice";
import OrderProgressTitle from "./OrderProgressTitle/OrderProgressTitle";
import OrderProgressContainer from "./OrderProgressContainer/OrderProgressContainer";
import { deleteProductToCart } from "../../action/cartsAction";

const OrderStatusPage = ({ setIsOrderStatus }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.products.length; i++) {
      sum += cart.products[i].price;
    }
    setSubtotal(sum);
  }, [subtotal, cart]);

  const removeProduct = (id) => {
    let [id_Cart, id_Prod] = [cart.id, id];
    dispatch(deleteProductToCart(id_Cart, id_Prod));
  };
  return (
    <Formik
      initialValues={{
        products: [] || cart.products,
        price: 0 || cart.price,
        discount: 0 || cart.discount,
      }}
      onSubmit={(values) => {}}
      validate={(values) => {}}
    >
      {({ values }) => (
        <form action="">
          <div className={s.container}>
            <div className={s.header}>
              <span>Order Status</span>
              <span className={s.link} onClick={() => setIsOrderStatus(false)}>
                Hide <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>

            <div className={s.progress}>
              <div className={s["progress-container"]}>
                <OrderProgressTitle title={"Ordered"} />
                <div className={s["list-products"]}>
                  {cart.products.map((product, index) => (
                    <div key={index}>
                      <OrderProgressContainer
                        product={product}
                        remove={removeProduct}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <OrderPrice values={values} subtotal={subtotal} />

            <div className={s.btn}></div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default OrderStatusPage;
