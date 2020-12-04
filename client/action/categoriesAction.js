import {setCategories} from "../reducers/categoriesReducer";


export const getCategories = () => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/categories', {
        method: 'GET',
    })
    const result = await res.json()
    dispatch(setCategories(result.categories))
}
