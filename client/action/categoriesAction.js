import {setCategories} from "../reducers/categoriesReducer";


export const getCategories = () => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/categories', {
        method: 'GET',
    })
    const result = await res.json()
    dispatch(setCategories(result.categories))
}

export const createCategories = (categories) => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/categories', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({categories:categories})
    })
    const result = await res.json()
    dispatch(getCategories())
}


export const deleteCategories = (id) => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/categories/' + id, {
        method: 'DELETE',
    })
    const result = await res.json()
    dispatch(getCategories())
}
