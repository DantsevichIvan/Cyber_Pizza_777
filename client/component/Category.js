import React from 'react';
import ButtonRemove from "./ButtonRemove";
import ViewProducts from "./ViewProducts";

const Category = ({category, updateProduct, removeProduct}) => {
    return (
        <div className='item'>
            <div className='item_content'>
                <ViewProducts/>
                <span className='textInfo_name'>{category.name}</span>
            </div>
            <div className='btns'>
                <button
                    className='item_btnAdd'
                    onClick={()=> updateProduct(category)}>
                    update
                </button>
                <ButtonRemove
                    removeProduct={removeProduct}
                    id={category._id}/>
            </div>
        </div>
    );
};

export default Category;
