const SET_AUTH_USER = 'SET_AUTH_USER';
const SUCCESS_LOG_OUT = 'SUCCESS_LOG_OUT';

const initState = {
    isAuth: false,
    userId: '',
    email: '',
    name: '',
    isAdmin:false
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            debugger
            return {
                ...state,
                isAuth: true,
                userId: action.data.user._id,
                email: action.data.user.email,
                name: action.data.user.name,
                isAdmin: action.data.user.isAdmin
            }
        }
        case SUCCESS_LOG_OUT: {
            return {
                ...state,
            }
        }
        default:
            return {
                ...state
            }
    }
}

export const setAuthUser = (data) => {
    return {
        type: SET_AUTH_USER,
        data
    }
}
export const setUser = (data) =>{

}

export default AuthReducer
