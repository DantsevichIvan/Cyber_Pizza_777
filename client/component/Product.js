import React from 'react';

const Product = ({removeProduct,product, updateProduct}) => {
    return (
        <div className='item'>
            <div className='item_info'>
                <img src={product.image} alt=""/>
                <div className='textInfo'>
                    <span>{product.name}</span>
                    <span>{product.description}</span>
                </div>
            </div>
            <span>{product.weight}</span>
            <span>{product.price}</span>
            <button onClick={()=> updateProduct(product)}>update</button>
            <button onClick={() => removeProduct(product._id)}>x</button>
        </div>
    );
};

export default Product;
