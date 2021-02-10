import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik } from "formik";
import { updateProduct } from "../../../../action/productsAction";
import s from "./Form.module.css";
import { addProductSchema } from "../../../../schemas/schemas";
import Button from "../../../../component/common/Buttons/Button/Button";
import Input from "../../../../component/common/Input/Input";

const FormUpdateProduct = ({ closeModal, item }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: item.name,
        description: item.description,
        weight: item.weight,
        price: item.price,
        categories: item.categories,
        image: item.image,
        id: item._id,
      }}
      onSubmit={(values) => {
        dispatch(updateProduct(values));
        closeModal();
      }}
      validationSchema={addProductSchema}
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
            <h3>Update Product</h3>
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
            <div className={s["form-item"]}>
              <label htmlFor="">Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
            </div>
            <Input
              name={"weight"}
              placeholder={"Weight"}
              value={values.weight}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.weight && errors.weight}
              classname={s["form-item"]}
            />
            <Input
              name={"price"}
              placeholder={"Price"}
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.price && errors.price}
              classname={s["form-item"]}
            />
            <Input
              name={"image"}
              placeholder={"Image"}
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.image && errors.image}
              classname={s["form-item"]}
              link={"https://dantsevichivan.github.io/Search-Image/"}
              titleLink={"Image Search"}
            />
            <div className={s["form-item"]}>
              <label htmlFor="">Categories</label>
              <Field name="categories" as="select">
                {categories.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </Field>
            </div>
          </div>
          <div className={s["btn-add"]}>
            <Button
              type={"submit"}
              disabled={isSubmitting}
              title={"Update Product"}
              classname={s["btn-submit"]}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormUpdateProduct;
