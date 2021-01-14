import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik } from "formik";
import { updateProduct } from "../../../../action/productsAction";
import s from "../Form.module.css";

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
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form action="" className={s.form} onSubmit={handleSubmit}>
          <div className={s.formHeader}>
            <h3>Update Product</h3>
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
            <div className={s.formItem}>
              <label htmlFor="">Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
            </div>
            <div className={s.formItem}>
              <label htmlFor="">Weight</label>
              <input
                type="number"
                name="weight"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.weight}
              />
            </div>
            <div className={s.formItem}>
              <label htmlFor="">Price</label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </div>
            <div className={s.formItem}>
              <label htmlFor="">Image</label>
              <input
                type="text"
                name="image"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
              />
              <a
                href="https://dantsevichivan.github.io/Search-Image/"
                target="_blank"
              >
                Image Search
              </a>
            </div>
            <div className={s.formItem}>
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
          <div className={s.btnAdd}>
            <button type="submit" disabled={isSubmitting}>
              Update Product
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormUpdateProduct;
