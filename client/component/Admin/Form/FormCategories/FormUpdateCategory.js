import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { updateCategories } from "../../../../action/categoriesAction";
import s from "../Form.module.css";

const FormUpdateCategory = ({ item, closeModal }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: item.name,
        available: item.available,
        id: item._id,
      }}
      onSubmit={(values) => {
        dispatch(updateCategories(values));
        closeModal();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form action="" className={s.form} onSubmit={handleSubmit}>
          <div className="form-header">
            <h3>Update Category</h3>
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
          </div>
          <div className={s.btnAdd}>
            <button type="submit" disabled={isSubmitting}>
              Update Category
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormUpdateCategory;
