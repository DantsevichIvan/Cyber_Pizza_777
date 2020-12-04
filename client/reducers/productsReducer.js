export const SET_PRODUCTS = 'SET_PRODUCTS'
export const ADD_PRODUCT = 'ADD_MATCH'
export const DELETE_PRODUCT = 'DELETE_MATCH'
export const SET_UPDATE_PRODUCT = 'SET_MESSAGE'



const initState = {
    products: []
}

const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: [...action.data]
            }
        }
        default:
            return {
                ...state
            }
    }
}

export const setProducts = (data) =>{
    return{
        type: SET_PRODUCTS,
        data
    }
}
export const addProduct = (data) =>{
    return{
        type: ADD_PRODUCT,
        data
    }
}
export const updateProduct = (data) =>{
    return{
        type: SET_UPDATE_PRODUCT,
        data
    }
}
export const removeProduct = (data) =>{
    return{
        type: DELETE_PRODUCT,
        data
    }
}

export default ProductsReducer


