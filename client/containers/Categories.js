import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../action/categoriesAction";
import Category from "../component/Category";
import ModalWindow from "../component/ModalWindow";
import FormAddCategory from "../component/FormAddCategory";
import HeaderContainer from "../component/HeaderContainer";

const Categories = () => {
    const dispatch =useDispatch()
    const categories = useSelector(state => state.categories.categories)
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
    const updateProduct = () =>{

    }



    return (
        <div className='container'>
            <HeaderContainer
                openCloseModal={openCloseModal}
                value={'Add Categories'}
                title={'Categories'}/>
            <div className='products'>
                {categories.map((item)=>{
                    return  <Category
                        key={item._id}
                        category={item}
                        removeCategory={removeCategory}
                        updateProduct={updateProduct}/>
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
