import {setAuthUser} from "../reducers/authReducer";

export const login = (values) => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/user/login', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    const result = await res.json()
    console.log(result)
    dispatch(setAuthUser(result))
}
export const logOut = () => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/user/logout', {
        method: "POST",
    })
    const result = await res.json()
    console.log(result)
};
export const registration = (values) => async (dispatch) => {
    const res = await fetch('http://localhost:3000/api/users', {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    const result = await res.json()
    console.log(result)
    dispatch(setAuthUser())

};
export const getUser = () => async () =>{
    const res = await fetch('http://localhost:3000/api/user/', {
        method: "GET",
    })
    const result = res.json()
    console.log(result)
}
