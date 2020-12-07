import React from 'react';
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../action/authAction";
import Redirect, {Link} from "react-router-dom";

const Login = () => {

    function redirecting(){
        return <Redirect to='/admin/products'/>
    }

    const dispatch = useDispatch()
    const handleSubmit = (values) =>{
        dispatch(login(values))
        redirecting()
    }
    const validation = (values) =>{
        const errors = {}
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
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={validation}
                onSubmit={handleSubmit}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form action="" className='form' onSubmit={handleSubmit}>
                        <div className='form-header'>
                            <h3>Login</h3>
                        </div>
                        <div className='form-wrap'>
                            <div className='form-item'>
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            <div className='form-item'>
                                <label htmlFor="">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                        </div>
                        <div>
                            <Link to='/admin/registration'>Registration</Link>
                        </div>
                        <div className='btn-add'>
                            <button type="submit" disabled={isSubmitting}>Login</button>
                        </div>
                    </form>

                )}
            </Formik>
        </div>
    );
};

export default Login;
