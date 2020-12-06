import React from 'react';
import {useDispatch} from "react-redux";
import {Formik} from "formik";
import {updateCategories} from "../action/categoriesAction";

const FormUpdateCategory = ({item, closeModal}) => {
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{
                name: item.name,
                available: item.available,
                id: item._id
            }}
            onSubmit={(values => {
                dispatch(updateCategories(values))
                closeModal()
            })}
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
                        <h3>Update Category</h3>
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
                        <button type="submit" disabled={isSubmitting}>Update Category</button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default FormUpdateCategory;
