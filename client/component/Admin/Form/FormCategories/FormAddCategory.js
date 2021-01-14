import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createCategories } from "../../../../action/categoriesAction";
import s from "../Form.module.css";

const FormAddCategory = ({ closeModal }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: "",
        available: false,
      }}
      onSubmit={(values) => {
        dispatch(createCategories(values));
        closeModal();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
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
        <form action="" className={s.form} onSubmit={handleSubmit}>
          <div className={s.formHeader}>
            <h3>Add new Category</h3>
            <button onClick={closeModal} className={s.btnClose}>
              Close
            </button>
          </div>
          <div className={s.formWrap}>
            <div className={s.formItem}>
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            {errors.name && touched.name && errors.name}
          </div>
          <div className={s.btnAdd}>
            <button type="submit" disabled={isSubmitting}>
              Create Category
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormAddCategory;
