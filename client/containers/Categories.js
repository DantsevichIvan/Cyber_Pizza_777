import React, {useEffect, useState} from 'react';
import AddButton from "../component/AddButton";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../action/categoriesAction";
import Category from "../component/Category";
import ModalWindow from "../component/ModalWindow";
import FormAddProduct from "../component/FormAddProduct";
import {createProduct, deleteProduct} from "../action/productsAction";
import FormAddCategory from "../component/FormAddCategory";
import HeaderContainer from "../component/HeaderContainer";

const Categories = () => {
    const dispatch =useDispatch()
    const categories = useSelector(state => state.products.products)
    const [modal, setModal] = useState(false)
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const openCloseModal = () => {
        setModal(!modal)
    }
    const handleSubmit = (value) => {
        dispatch()
        setModal(!modal)
    }
    const removeCategory = (id) =>{
        dispatch()
    }


    return (
        <div className='container'>
            <HeaderContainer
                openCloseModal={openCloseModal}
                value={'Add Categories'}
                title={'Categories'}/>
            <div className='products'>
                {categories.map((item)=>{
                    return  <Category category={item}/>
                })}
            </div>
            {
                modal ?
                    <ModalWindow
                        Component={FormAddCategory}
                        handleSubmit={handleSubmit}
                        openCloseModal={openCloseModal}/>
                    : null
            }
        </div>
    );
};

export default Categories;
