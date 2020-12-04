import React from 'react';
import '../style/Form.css'

const FormAddProduct = ({closeModal, handleSubmit}) => {
    return (
        <form action="" className='form' onSubmit={handleSubmit}>
            <div className='form-header'>
                <h3>Add new Product</h3>
                <button onClick={closeModal} className='btn-close'>Close</button>
            </div>
            <div className='form-wrap'>
                <div className='form-item'>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name'/>
                </div>
                <div className='form-item'>
                    <label htmlFor="">Description</label>
                    <textarea name='description'/>
                </div>
                <div className='form-item'>
                    <label htmlFor="">Weight</label>
                    <input type="number" name='weight'/>
                </div>
                <div className='form-item'>
                    <label htmlFor="">Price</label>
                    <input type="text" name='Price'/>
                </div>
                <div className='form-item'>
                    <label htmlFor="">Categories</label>
                    <input type="text" name='Categories'/>
                </div>
            </div>
            <div className='btn-add'><button>Create Product</button></div>
        </form>
    );
};

export default FormAddProduct;
