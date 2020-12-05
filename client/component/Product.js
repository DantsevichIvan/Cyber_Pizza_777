import React from 'react';
import ButtonRemove from "./ButtonRemove";

const Product = ({removeProduct,product, updateProduct}) => {
    return (
        <div className='item'>
            <div className='item_info'>
                <img src={product.image} alt=""/>
                <div className='textInfo'>
                    <span className='textInfo_name'>{product.name}</span>
                    <span className='textInfo_description'>{product.description}</span>
                </div>
            </div>
            <span className='info'>Weight:<span>{product.weight}</span></span>
            <span className='info'>Price:<span>{product.price}</span></span>
            <div className='btns'>
                <button
                    className='item_btnAdd'
                    onClick={()=> updateProduct(product)}>
                    update
                </button>
                <ButtonRemove
                    remove={removeProduct}
                    id={product._id}/>
            </div>
        </div>
    );
};

export default Product;
