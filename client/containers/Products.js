import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createProduct, deleteProduct, getProducts} from "../action/productsAction";
import AddButton from "../component/AddButton";
import '../style/Products.css'
import '../style/Modal.css'
import FormAddProduct from "../component/FormAddProduct";
import Product from "../component/Product";
import ModalWindow from "../component/ModalWindow";

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const [modal, setModal] = useState(false)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const openCloseModal = () => {
        setModal(!modal)
    }
    const handleSubmit = (value) => {
        dispatch(createProduct(value))
        setModal(!modal)
    }
    const removeProduct = (id) =>{
        dispatch(deleteProduct(id))
    }
    const updateProduct = () =>{

    }

    return (
        <div className='container'>
            <div className='container_header' >
                <h3>Products</h3>
                <AddButton method={openCloseModal} title={'Add Products'}/>
            </div>
            <div className='products'>
                {products.map((item)=>{
                  return  <Product
                      key={item._id}
                      updateProduct={updateProduct}
                      removeProduct={removeProduct}
                      product={item}/>
                })}
            </div>
            {
                modal ?
                   <ModalWindow
                       Component={FormAddProduct}
                       handleSubmit={handleSubmit}
                       openCloseModal={openCloseModal}/>
                    : null
            }

        </div>
    );
};

export default Products;
