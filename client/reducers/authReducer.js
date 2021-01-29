const SET_AUTH_USER = "SET_AUTH_USER";
const SET_USER = "SET_USER";
const SUCCESS_LOG_OUT = "SUCCESS_LOG_OUT";
const SUCCESS_ERROR_DATA = "SUCCESS_ERROR";
const SUCCESS_ERROR_AUTH = "SUCCESS_ERROR_AUTH";

const initState = {
  isAuth: false,
  email: "",
  name: "",
  isAdmin: null,
  errorData: "",
  errorAuth: "",
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case SET_USER: {
      return {
        ...state,
        email: action.data.email,
        name: action.data.name,
        isAdmin: action.data.isAdmin,
        isAuth: true,
        errorData: "",
      };
    }
    case SUCCESS_ERROR_DATA: {
      return {
        ...state,
        errorData: action.data.message,
        isAuth: false,
      };
    }
    case SUCCESS_ERROR_AUTH: {
      return {
        ...state,
        errorAuth: action.data.message,
        isAuth: false,
      };
    }
    case SUCCESS_LOG_OUT: {
      return {
        ...state,
        isAuth: false,
        isAdmin: null,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
export const setAuthUser = () => {
  return {
    type: SET_AUTH_USER,
  };
};
export const successLogOut = () => {
  return {
    type: SUCCESS_LOG_OUT,
  };
};
export const setUser = (data) => {
  return {
    type: SET_USER,
    data,
  };
};
export const successErrorData = (data) => {
  return {
    type: SUCCESS_ERROR_DATA,
    data,
  };
};
export const successErrorAuth = (data) => {
  return {
    type: SUCCESS_ERROR_AUTH,
    data,
  };
};

export default AuthReducer;
