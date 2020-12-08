const SET_AUTH_USER = 'SET_AUTH_USER';
const SET_USER = 'SET_USER';
const SUCCESS_LOG_OUT = 'SUCCESS_LOG_OUT';

const initState = {
    isAuth: false,
    email: '',
    name: '',
    isAdmin: false
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                isAuth: true
            }
        }
        case SET_USER: {
            return {
                ...state,
                email: action.data.email,
                name: action.data.name,
                isAdmin: action.data.isAdmin,
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

export const setAuthUser = () => {
    return {
        type: SET_AUTH_USER,
    }
}
export const setUser = (data) => {
    return {
        type: SET_USER,
        data
    }
}

export default AuthReducer
