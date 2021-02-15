import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import s from "../../Admin/Categories/Form/Form.module.css";
import Input from "../../../component/common/Input/Input";
import Button from "../../../component/common/Buttons/Button/Button";
import {getStatusCode} from "../../../action/orderAction";

const OrderStatusForm = ({closeModal}) => {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        status_code: "",
      }}
      onSubmit={(values) => {
        dispatch(getStatusCode())
        history.push(`/orders_status/`);
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
            <h3>Status Code</h3>
            <Button
              method={closeModal}
              title={"Close"}
              classname={s["btn-close"]}
            />
          </div>
          <div className={s["form-wrap"]}>
            <Input
              name={"status_code"}
              placeholder={"Code"}
              value={values.status_code}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.status_code && errors.status_code}
              classname={s["form-item"]}
            />
          </div>
          <div className={s['btn-add']}>
            <Button
              type={"submit"}
              disabled={isSubmitting}
              title={"Order Status"}
              classname={s["btn-submit"]}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default OrderStatusForm;
