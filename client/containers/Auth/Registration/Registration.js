import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { registration } from "../../../action/authAction";
import s from "./Registration.module.css";
import { useHistory } from "react-router-dom";
import ButtonBack from "../../../component/common/Buttons/ButtonBack/ButtonBack";
import {registrationSchema} from "../../../schemas/schemas";

const Registration = ({}) => {
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
        validate={registrationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          touched,
          handleBlur,
          handleSubmit,
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
              <div className={s.registration_form_item}>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span>{errors.email && touched.email && errors.email}</span>
              </div>
              <div className={s.registration_form_item}>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <span>{errors.name && touched.name && errors.name}</span>
              </div>
              <div className={s.registration_form_item}>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span>
                  {errors.password && touched.password && errors.password}
                </span>
              </div>
              <div className={s.registration_form_item}>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <span>
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </span>
              </div>
              {errorMessage ? (
                <span className={s.form_login_item_error}>{errorMessage}</span>
              ) : null}
            </div>
            <div className={s.registration_form_btn}>
              <button type="submit">Registration</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
