import React from "react";
import { Formik } from "formik";
import s from "./PlaceOrderPage.module.css";
import Input from "../common/Input/Input";
import Product from "./Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const PlaceOrderPage = () => {
  const history = useHistory();
  const goBack = () => history.goBack();
  const handleSubmit = (values) => {};
  return (
    <div className={s.wrap}>
      <Formik
        initialValues={{
          user: {
            phone: "",
            name: "",
            address: {
              street: "",
              house: "",
              flat: "",
            },
          },
          price: 12,
          products: [{ name: "paperoni", count: 2 }],
        }}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form action="" className={s.form}>
            <div className={s.header}>
              <div className={s["header-back"]}>
                <button onClick={goBack}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back
                </button>
              </div>
              <h3>Place Order</h3>
            </div>
            <div className={s.container}>
              <div className={s.inputs}>
                <Input
                  name={"name"}
                  placeholder={"Name"}
                  value={values.name}
                  errors={errors.name}
                  touched={touched.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  classname={"form-item"}
                />
                <Input
                  name={"phone"}
                  placeholder={"Phone"}
                  value={values.phone}
                  errors={errors.phone}
                  touched={touched.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  classname={"form-item"}
                />
                <Input
                  name={"street"}
                  placeholder={"Street"}
                  value={values.street}
                  errors={errors.street}
                  touched={touched.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  classname={"form-item"}
                />
                <Input
                  name={"house"}
                  placeholder={"House"}
                  value={values.house}
                  errors={errors.house}
                  touched={touched.house}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  classname={"form-item"}
                />
                <Input
                  name={"flat"}
                  placeholder={"Flat"}
                  value={values.flat}
                  errors={errors.flat}
                  touched={touched.flat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  classname={"form-item"}
                />
              </div>
              <div className={s.order}>
                <div className={s["list-order"]}>
                  <h2>Order List</h2>
                  <div className={s["list-order-product"]}>
                    {values.products.map((product) => (
                      <Product product={product} />
                    ))}
                  </div>
                </div>
                <div className={s["order-price"]}>
                  <span>Price:</span>
                  <span>${values.price}</span>
                </div>
              </div>
            </div>
            <div className={s.btn}>
              <button>Confirm Order</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PlaceOrderPage;
