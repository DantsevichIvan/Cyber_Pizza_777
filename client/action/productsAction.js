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
        body: JSON.stringify({product:product})
    })
    const result = await res.json()
    dispatch(getProducts())
}


export const updateProduct = (formData, id) => async (dispatch) => {

}
export const deleteProduct = (id) => async (dispatch) => {
    const res = await fetch('https://localhost:3000/api/products/' + id, {
        mode: 'cors',
        method: 'DELETE',
    })
    const result = await res.json()
    dispatch(getProducts())
}


//https://cyberpizza.herokuapp.com/api/products/
