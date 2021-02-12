import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../action/authAction";
import { Link, useHistory } from "react-router-dom";
import s from "./Login.module.css";
import ButtonBack from "../../../component/common/Buttons/ButtonBack/ButtonBack";
import { loginSchema } from "../../../schemas/schemas";
import Input from "../../../component/common/Input/Input";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorData);
  const goBack = () => history.goBack();

  const handleSubmit = (values) => {
    dispatch(login(values));
    history.push("/");
  };

  return (
    <div className={s.wrap_login}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
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
                name={"password"}
                type={"password"}
                placeholder={"Password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
                classname={s["form-item"]}
              />
              {errorMessage ? (
                <span className={s.form_login_item_error}>{errorMessage}</span>
              ) : null}
            </div>

            <div className={s.form_login_link}>
              <Link to="/register">Registration</Link>
            </div>
            <div className={s.form_login_btn}>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
