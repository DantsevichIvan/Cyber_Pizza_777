import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { createCategories } from "../../../../action/categoriesAction";
import s from "./Form.module.css";
import { addCategorySchema } from "../../../../schemas/schemas";
import Button from "../../../../component/common/Buttons/Button/Button";
import Input from "../../../../component/common/Input/Input";

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
      validationSchema={addCategorySchema}
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
          <div className={s["form-header"]}>
            <h3>Add new Category</h3>
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
              title={"Create Category"}
              classname={s["btn-submit"]}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormAddCategory;
