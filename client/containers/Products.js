import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createProduct, deleteProduct, getProducts} from "../action/productsAction";
import AddButton from "../component/AddButton";
import '../style/Products.css'
import '../style/Modal.css'
import FormAddProduct from "../component/FormAddProduct";
import Product from "../component/Product";

const product ={
    name:'',
    price: 12,
    id: ''
}

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const [modal, setModal] = useState(false)
    console.log(products)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const openCloseModal = () => {
        setModal(!modal)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', e.target[1].value)
        formData.append('description', e.target[2].value)
        formData.append('weight', e.target[3].value)
        formData.append('price', e.target[4].value)
        formData.append('categories', e.target[5].value)
        dispatch(createProduct(formData))
    }
    const removeProduct = (id) =>{
        dispatch(deleteProduct(id))
    }
    const updateProduct = () =>{

    }
    return (
        <div className='container'>
            <div>
                <h3>Products</h3>
                <AddButton method={openCloseModal} title={'Add Products'}/>
            </div>
            <div className='products'>
                <Product updateProduct={updateProduct} removeProduct={removeProduct} product={product}/>
                <Product removeProduct={removeProduct} product={product}/>
                <Product removeProduct={removeProduct} product={product}/>
            </div>
            {
                modal ?
                    <div className='modal'>
                        <FormAddProduct handleSubmit={handleSubmit} closeModal={openCloseModal}/>
                    </div>
                    : null
            }

        </div>
    );
};

export default Products;
