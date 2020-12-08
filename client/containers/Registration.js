import React from 'react';
import {useDispatch} from "react-redux";
import {Formik} from "formik";
import {registration} from "../action/authAction";
import '../style/Registration.css'
import {useHistory} from "react-router-dom";


const Registration = ({}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        dispatch(registration(values))
        history.push('/')
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
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(values.password)) {
            errors.password = 'Password is not good'
            //    !errors.password.match(passw)
        }
        return errors;
    }

    return (
        <div className='registration_wrap'>
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
                  }) => (
                    <form action="" className='registration_form' onSubmit={handleSubmit}>
                        <div className='registration_form_header'>
                            <h3>Registration</h3>
                        </div>
                        <div className='registration_form_wrap'>
                            <div className='registration_form_item'>
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
                            <div className='registration_form_item'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <span>
                                      {errors.name && touched.name && errors.name}
                                </span>
                            </div>
                            <div className='registration_form_item'>
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
                        <div className='registration_form_btn'>
                            <button type="submit">Registration</button>
                        </div>
                    </form>

                )}
            </Formik>
        </div>
    );
};

export default Registration;
