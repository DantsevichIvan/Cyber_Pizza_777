import React from 'react';
import '../style/Form.css'
import {Field, Formik} from "formik";
import {useSelector} from "react-redux";


const FormAddProduct = ({closeModal, handleSubmit}) => {
    const categories = useSelector(state => state.categories.categories)
    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                weight: 0,
                price: 0,
                categories: categories,
                image: ''
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
                        <h3>Add new Product</h3>
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
                        <div className='form-item'>
                            <label htmlFor="">Description</label>
                            <textarea
                                name='description'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}/>
                        </div>
                        <div className='form-item'>
                            <label htmlFor="">Weight</label>
                            <input
                                type="number"
                                name="weight"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.weight}
                            />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="">Price</label>
                            <input
                                type="number"
                                name="price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                        </div>
                        <div className='form-item'>
                            <label htmlFor="">Image</label>
                            <input
                                type="text"
                                name="image"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.image}
                            />
                            <a href="https://dantsevichivan.github.io/Search-Image/" target='_blank'>Image Search</a>
                        </div>
                        <div className='form-item'>
                            <label htmlFor="">Categories</label>
                            <Field name="categories" as="select" >
                                {
                                    categories.map((item) => {
                                        return<option
                                            key={item._id}
                                            value={item.name}>
                                            {item.name}
                                        </option>
                                    })
                                }
                            </Field>
                        </div>
                    </div>
                    <div className='btn-add'>
                        <button type="submit" disabled={isSubmitting}>Create Product</button>
                    </div>
                </form>

            )}
        </Formik>


    );
};

export default FormAddProduct;

