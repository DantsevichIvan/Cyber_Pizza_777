import React from "react";
import {Field, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../../../../action/productsAction";
import s from "./Form.module.css";
import {addProductSchema} from "../../../../schemas/schemas";
import Input from "../../../../component/common/Input/Input";
import Button from "../../../../component/common/Buttons/Button/Button";
import Select from "../../../../component/common/Select/Select";
import TextArea from "../../../../component/common/TextArea/TextArea";

const FormAddProduct = ({closeModal}) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

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
      validationSchema={addProductSchema}
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
            <TextArea
              name={"description"}
              title={'Description'}
              value={values.description}
              handleChange={handleChange}
              classname={s["form-item"]}
              error={touched.description && errors.description}
            />
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
            <Select
              classname={s["form-item"]}
              title={'Categories'}
              handleChange={handleChange}
              selects={categories}
              error={touched.categories && errors.categories}/>
          </div>
          <div className={s["btn-add"]}>
            <Button
              type={"submit"}
              disabled={isSubmitting}
              title={"Create Product"}
              classname={s["btn-submit"]}
            />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormAddProduct;
