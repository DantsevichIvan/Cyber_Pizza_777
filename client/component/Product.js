import React from 'react';

const Product = ({removeProduct,product, updateProduct}) => {
    return (
        <div className='item'>
            <div className='item_info'>
                <img
                    src="https://cdn.shopify.com/s/files/1/0248/2411/9343/products/Pepperoni_1024x1024.png?v=1574684715"
                    alt=""/>
                <div className='textInfo'>
                    <span>Name</span>
                    <span>Description</span>
                </div>
            </div>
            <span>weight</span>
            <span>prace</span>
            <button onClick={()=> updateProduct(product)}>update</button>
            <button onClick={() => removeProduct(product.id)}>x</button>
        </div>
    );
};

export default Product;
