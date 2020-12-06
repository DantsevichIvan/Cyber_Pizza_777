import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createCategories, deleteCategories, getCategories} from "../action/categoriesAction";
import Category from "../component/Category";
import ModalWindow from "../component/ModalWindow";
import FormAddCategory from "../component/FormAddCategory";
import HeaderContainer from "../component/HeaderContainer";
import FormUpdateCategory from "../component/FormUpdateCategory";

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.categories)
    const [isModal, setIsModal] = useState(false)
    const [method, setMethod] = useState('')
    const [category, setCategory] = useState('')
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    const openCloseModal = () => {
        setIsModal(!isModal)
    }


    const createCategory = (value) => {
        setIsModal(!isModal)
        setMethod('create')
    }
    const removeCategory = (id) => {
        dispatch(deleteCategories(id))
    }

    const updateCategory = (category) => {
        setIsModal(!isModal)
        setMethod('update')
        setCategory(category)
    }

    return (
        <div className='container'>
            <HeaderContainer
                create={createCategory}
                value={'Add Categories'}
                title={'Categories'}/>
            <div className='products'>
                {categories.map((item) => {
                    return <Category
                        key={item._id}
                        category={item}
                        removeCategory={removeCategory}
                        updateCategory={updateCategory}/>
                })}
            </div>
            {
                isModal ? method === 'create' ?
                    <ModalWindow
                        Component={FormAddCategory}
                        openCloseModal={openCloseModal}/>
                    : <ModalWindow
                        Component={FormUpdateCategory}
                        item={category}
                        openCloseModal={openCloseModal}/>
                    : null
            }
        </div>
    );
};

export default Categories;
