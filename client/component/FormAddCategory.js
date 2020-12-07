import React from 'react';
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {createCategories} from "../action/categoriesAction";

const FormAddCategory = ({closeModal}) => {
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{
                name: '',
                available: false
            }}
            onSubmit={(values => {
                dispatch(createCategories(values))
                closeModal()
            })}
            validate={values => {
                const errors = {}
                if (!values.name) {
                    errors.name = 'Required'
                }
                return errors
            }}
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
                <form action="" className='form' onSubmit={handleSubmit}>
                    <div className='form-header'>
                        <h3>Add new Category</h3>
                        <button onClick={closeModal} className='btn-close'>Close</button>
                    </div>
                    <div className='form-wrap'>
                        <div className='form-item'>
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </div>
                        {errors.name && touched.name && errors.name}
                    </div>
                    <div className='btn-add'>
                        <button type="submit" disabled={isSubmitting}>Create Category</button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default FormAddCategory;
