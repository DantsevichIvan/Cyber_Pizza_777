import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../../action/authAction";
import s from "./Registration.module.css";
import { useHistory } from "react-router-dom";
import ButtonBack from "../../../component/common/Buttons/ButtonBack/ButtonBack";
import { Formik } from "formik";
import { registrationSchema } from "../../../schemas/schemas";
import Input from "../../../component/common/Input/Input";

const Registration = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorData);
  const auth = useSelector((state) => state.auth.isAuth);

  if (auth) {
    history.push("/admin");
  }
  const handleSubmit = (values) => {
    dispatch(registration(values));
  };

  const goBack = () => history.goBack();

  return (
    <div className={s.registration_wrap}>
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        {({
          values,
          errors,
          handleChange,
          touched,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            action=""
            className={s.registration_form}
            onSubmit={handleSubmit}
          >
            <div className={s.registration_form_header}>
              <ButtonBack
                classname={s["header-back"]}
                goBack={goBack}
                title={"Login"}
              />
              <h3>Registration</h3>
            </div>
            <div className={s.registration_form_wrap}>
              <Input
                name={"email"}
                placeholder={"Email"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
                classname={s["form-item"]}
              />
              <Input
                name={"name"}
                placeholder={"Name"}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                classname={s["form-item"]}
              />
              <Input
                name={"password"}
                type={"password"}
                placeholder={"Password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
                classname={s["form-item"]}
              />
              <Input
                name={"confirmPassword"}
                type={"password"}
                placeholder={"ConfirmPassword"}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.confirmPassword && errors.confirmPassword}
                classname={s["form-item"]}
              />
              {errorMessage ? (
                <span className={s.form_login_item_error}>{errorMessage}</span>
              ) : null}
            </div>
            <div className={s.registration_form_btn}>
              <button type="submit" disabled={isSubmitting}>
                Registration
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
