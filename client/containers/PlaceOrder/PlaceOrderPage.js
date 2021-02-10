import React from "react";
import { Field, Formik } from "formik";
import s from "./PlaceOrderPage.module.css";
import Input from "../../component/common/Input/Input";
import Product from "../../component/PlaceOrderPage/Product/Product";
import { useHistory } from "react-router-dom";
import ButtonBack from "../../component/common/Buttons/ButtonBack/ButtonBack";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../action/orderAction";
import {orderSchema} from "../../schemas/schemas";

const PlaceOrderPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const order = useSelector((state) => state.order.order);

  const goBack = () => history.goBack();

  const handleSubmit = (values) => {
    dispatch(updateOrder(values, order.id));
    history.push(`/orders/${order.id}`);
  };

  return (
    <div className={s.wrap}>
      <Formik
        initialValues={{
          phone: "",
          name: "",
          street: "",
          house: "",
          flat: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form action="" className={s.form} onSubmit={handleSubmit}>
            <div className={s.header}>
              <ButtonBack
                classname={s["header-back"]}
                goBack={goBack}
                title={"Back"}
              />
              <h3>Place Order</h3>
            </div>
            <div className={s.container}>
              <div className={s.inputs}>
                <Input
                  name={"name"}
                  placeholder={"Name"}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name}
                  classname={s["form-item"]}
                />
                <Input
                  name={"phone"}
                  placeholder={"Phone"}
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  onBlur={handleBlur}
                  classname={s["form-item"]}
                />
                <Input
                  name={"street"}
                  placeholder={"Street"}
                  value={values.street}
                  error={errors.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  classname={s["form-item"]}
                />
                <Input
                  name={"house"}
                  placeholder={"House"}
                  value={values.house}
                  error={errors.house}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  classname={s["form-item"]}
                />
                <Input
                  name={"flat"}
                  placeholder={"Flat"}
                  value={values.flat}
                  error={errors.flat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  classname={s["form-item"]}
                />
              </div>
              <div className={s.order}>
                <div className={s["list-order"]}>
                  <h2>Order List</h2>
                  <div className={s["list-order-product"]}>
                    {order.products.map((product) => (
                      <Product product={product} key={order._id} />
                    ))}
                  </div>
                </div>
                <div className={s["order-price"]}>
                  <span>Price:</span>
                  <span>${order.price}</span>
                </div>
              </div>
            </div>
            <div className={s.btn}>
              <button type="submit" disabled={isSubmitting}>
                Confirm Order
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PlaceOrderPage;
