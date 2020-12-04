export const SET_PRODUCTS = 'SET_PRODUCTS'




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

export default ProductsReducer


