import {setProducts} from "../reducers/productsReducer";
import {getCategories} from "./categoriesAction";

export const getProducts = () => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/products', {
        method: 'GET',
    })
    const result = await res.json()
    dispatch(getCategories())
    dispatch(setProducts(result.products))
}
export const createProduct = (product) => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/products', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({product:product})
    })
    const result = await res.json()
    dispatch(getProducts())
}

export const updateProduct = (formData, id) => async (dispatch) => {

}


export const deleteProduct = (id) => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/products/' + id, {
        method: 'DELETE',
    })
    const result = await res.json()
    dispatch(getProducts())
}

//https://cyberpizza.herokuapp.com/api/products/
