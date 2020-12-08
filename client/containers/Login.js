import React from 'react';
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../action/authAction";
import {Link, useHistory} from "react-router-dom";
import '../style/Login.css'

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        dispatch(login(values))
        history.push('/')
    }
    const validation = (values) => {
        const errors = {}
        if (!values.password) {
            errors.password = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }
    return (
        <div className='wrap_login'>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
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
                      isSubmitting,
                  }) => (
                    <form action="" className='form_login' onSubmit={handleSubmit}>
                        <div className='form_login_header'>
                            <h3>Login</h3>
                        </div>
                        <div className='form_login_wrap'>
                            <div className='form_login_item'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <span>
                                     {errors.email && touched.email && errors.email}
                                </span>
                            </div>
                            <div className='form_login_item'>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <span>
                                    {errors.password && touched.password && errors.password}
                                </span>
                            </div>
                        </div>
                        <div className='form_login_link'>
                            <Link to='/admin/registration'>Registration</Link>
                        </div>
                        <div className='form_login_btn'>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
