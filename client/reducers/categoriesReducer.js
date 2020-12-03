export const SET_CATEGORIES = 'SET_CATEGORIES'

const initState = {
    categories: []
}

const CategoriesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
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






export default CategoriesReducer
