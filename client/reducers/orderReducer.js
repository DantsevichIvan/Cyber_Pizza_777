const SET_ORDER = "SET_ORDER";

const initState = {
  order: {
    status: "",
  },
};

const OrderReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        order: {
          status: action.data.order.status,
        },
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const setOrder = (data) => {
  return {
    type: SET_ORDER,
    data,
  };
};

export default OrderReducer;
