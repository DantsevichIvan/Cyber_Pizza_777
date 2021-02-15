import React from "react";
import { Formik } from "formik";
import s from "../../Admin/Categories/Form/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon } from "../../../action/cartsAction";
import {couponSchema} from "../../../schemas/schemas";
import Input from "../../../component/common/Input/Input";
import Button from "../../../component/common/Buttons/Button/Button";

const CouponForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts.cart);
  return (
    <Formik
      initialValues={{
        coupon: "",
      }}
      onSubmit={(values) => {
        dispatch(addCoupon(cart.id, values, cart.total));
        closeModal();
      }}
      validationSchema={couponSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form action="" onSubmit={handleSubmit} className={s.form}>
          <div className={s["form-header"]}>
            <h3>Add Coupon</h3>
            <Button title={'Close'} method={closeModal} classname={s["btn-close"]}/>
          </div>
          <div className={s["form-wrap"]}>
            <Input
            classname={s["form-item"]}
            name={'coupon'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.coupon}
            error={touched.coupon && errors.coupon}
            />
          </div>
          <div className={s["btn-add"]}>
            <Button
              type={"submit"}
              disabled={isSubmitting}
              title={" Add Coupon"}
              classname={s["btn-submit"]}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default CouponForm;
