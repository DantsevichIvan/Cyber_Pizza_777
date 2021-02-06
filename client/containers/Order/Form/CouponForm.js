import React from "react";
import { Formik } from "formik";
import s from "../../Admin/Categories/Form/Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon } from "../../../action/cartsAction";

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
      validate={(values) => {
        const errors = {};
        if (!values.coupon) {
          errors.coupon = "Required";
        }
        return errors;
      }}
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
            <button onClick={closeModal} className={s["btn-close"]}>
              Close
            </button>
          </div>
          <div className={s["form-wrap"]}>
            <div className={s["form-item"]}>
              <label htmlFor="">Coupon</label>
              <input
                type="text"
                name="coupon"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.coupon}
              />
            </div>
            {errors.coupon && touched.coupon && errors.coupon}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Coupon
          </button>
        </form>
      )}
    </Formik>
  );
};

export default CouponForm;
