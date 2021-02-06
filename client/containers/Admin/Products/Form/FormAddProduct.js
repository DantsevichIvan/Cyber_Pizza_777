import React from "react";
import { Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../../action/productsAction";
import s from "./Form.module.css";

const FormAddProduct = ({ closeModal }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const validation = (values) => {
    const errors = {};
    for (let key in values) {
      if (!values[key]) {
        errors[key] = "Required";
      }
    }
    // if (values.categories !== ' '){
    //     errors.categories = 'Selected category'
    // }
    return errors;
  };
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        weight: 0,
        price: 0,
        categories: categories,
        image: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        dispatch(createProduct(values));
        closeModal();
      }}
      validate={validation}
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
            <h3>Add new Product</h3>
            <button onClick={closeModal} className={s["btn-close"]}>
              Close
            </button>
          </div>
          <div className={s["form-wrap"]}>
            <div className={s["form-item"]}>
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
            </div>
            <div className={s["form-item"]}>
              <label htmlFor="">Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && errors.description}
            </div>
            <div className={s["form-item"]}>
              <label htmlFor="">Weight</label>
              <input
                type="number"
                name="weight"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weight}
              />
              {errors.weight && touched.weight && errors.weight}
            </div>
            <div className={s["form-item"]}>
              <label htmlFor="">Price</label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
              {errors.price && touched.price && errors.price}
            </div>
            <div className={s["form-item"]}>
              <label htmlFor="">Image</label>
              <input
                type="text"
                name="image"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
              />
              {errors.image && touched.image && errors.image}
              <a
                href="https://dantsevichivan.github.io/Search-Image/"
                target="_blank"
              >
                Image Search
              </a>
            </div>
            <div className={s["form-item"]}>
              <label htmlFor="">Categories</label>
              <Field name="categories" as="select" onChange={handleChange}>
                <option value="" defaultValue>
                  Select Categories
                </option>
                {categories.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </Field>
              {errors.categories && touched.categories && errors.categories}
            </div>
          </div>
          <div className={s["btn-add"]}>
            <button type="submit" disabled={isSubmitting}>
              Create Product
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormAddProduct;
