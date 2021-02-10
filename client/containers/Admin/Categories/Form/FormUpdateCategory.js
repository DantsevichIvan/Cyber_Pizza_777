import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { updateCategories } from "../../../../action/categoriesAction";
import s from "./Form.module.css";
import Button from "../../../../component/common/Buttons/Button/Button";
import Input from "../../../../component/common/Input/Input";

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
      validationSchema={addCategorySchema}
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
          <div className={s["form-header"]}>
            <h3>Update Category</h3>
            <Button
              method={closeModal}
              title={"Close"}
              classname={s["btn-close"]}
            />
          </div>
          <div className={s["form-wrap"]}>
            <Input
              name={"name"}
              placeholder={"Name"}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
              classname={s["form-item"]}
            />
          </div>
          <div className={s["btn-add"]}>
            <Button
              type={"submit"}
              disabled={isSubmitting}
              title={"Update Category"}
              classname={s["btn-submit"]}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormUpdateCategory;
