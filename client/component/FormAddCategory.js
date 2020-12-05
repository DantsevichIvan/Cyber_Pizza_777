import React from 'react';
import {Formik} from "formik";

const FormAddCategory = ({handleSubmit,closeModal}) => {
    return (
        <Formik
            initialValues={{
                name: '',
                available: false
            }}
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
