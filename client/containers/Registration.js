import React from 'react';
import {useDispatch} from "react-redux";
import {Formik} from "formik";
import {Link} from "react-router-dom";

const Registration = ({}) => {
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        // dispatch()
    }
    const validation = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.name) {
            errors.name = 'Required';
        }
        let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
        if (!values.password) {
            errors.password = 'Required';
        }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(values.password)){
            errors.password = 'Password is not good'
        //    !errors.password.match(passw)
        }
        return errors;
    }
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    password: '',
                }}
                validate={validation}
                onSubmit={handleSubmit}
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
                    <form action="" className='form' onSubmit={handleSubmit}>
                        <div className='form-header'>
                            <h3>Registration</h3>
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
                                {errors.email && touched.email && errors.email}
                            </div>
                            <div className='form-item'>
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

                            <div className='form-item'>
                                <label htmlFor="">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                            </div>

                        </div>
                        <div className='btn-add'>
                            <button type="submit" disabled={isSubmitting}>Registration</button>
                        </div>
                    </form>

                )}
            </Formik>
        </div>
    );
};

export default Registration;
