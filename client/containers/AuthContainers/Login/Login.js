import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../action/authAction";
import { Link, useHistory } from "react-router-dom";
import s from "./Login.module.css";
import ButtonBack from "../../../component/common/ButtonBack/ButtonBack";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorData);
  const auth = useSelector((state) => state.auth.isAuth);
  const goBack = () => history.goBack();

  if (auth) {
    history.push("/admin");
  }
  const handleSubmit = (values) => {
    dispatch(login(values));
  };
  const validation = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  return (
    <div className={s.wrap_login}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validation}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form action="" className={s.form_login} onSubmit={handleSubmit}>
            <div className={s.form_login_header}>
              <ButtonBack
                classname={s["header-back"]}
                goBack={goBack}
                title={"Home"}
              />
              <h3>Login</h3>
            </div>
            <div className={s.form_login_wrap}>
              <div className={s.form_login_item}>
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
              <div className={s.form_login_item}>
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
              {errorMessage ? (
                <span className={s.form_login_item_error}>{errorMessage}</span>
              ) : null}
            </div>

            <div className={s.form_login_link}>
              <Link to="/admin/registration">Registration</Link>
            </div>
            <div className={s.form_login_btn}>
              <button type="submit">Login</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
