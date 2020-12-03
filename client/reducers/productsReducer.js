export const SET_PRODUCTS = 'SET_PRODUCTS'

const initState = {
    products: []
}

const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state
            }
        }

        default:
            return {
                ...state
            }
    }
}






export default ProductsReducer


