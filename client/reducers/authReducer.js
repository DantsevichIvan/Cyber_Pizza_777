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
            return {
                ...state,
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

export default AuthReducer
