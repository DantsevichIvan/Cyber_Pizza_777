import {addProduct, removeProduct, setProducts} from "../reducers/productsReducer";

export const getProducts = () => async (dispatch) => {
    // const res = await fetch('https://localhost:3000/api/products/',{
    //     mode: 'cors',
    //     method: 'GET',
    //     headers:{
    //         'Content-Type':'application/json',
    //         'Accept': 'application/json',
    //     }
    // })
    // console.log(res)
    // dispatch(setProducts(res.data))
}
export const createProduct = (formData) => async (dispatch) => {
    // const res = await fetch('https://cyberpizza.herokuapp.com/api/products',{
    //     mode:'cors',
    //     method: "POST",
    //     headers:{},
    //     body: JSON.stringify({formData})
    // })
    // dispatch(addProduct())
}


export const updateProduct = (formData, id) => async (dispatch) => {

}
export const deleteProduct = (id) => async (dispatch) => {
    // const res = await fetch('https://cyberpizza.herokuapp.com/api/products/' + id, {
    //     mode: 'cors',
    //     method: 'DELETE',
    // })
    // dispatch(removeProduct())
}


//https://cyberpizza.herokuapp.com/api/products/
