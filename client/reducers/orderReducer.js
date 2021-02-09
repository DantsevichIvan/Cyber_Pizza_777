const SET_ORDER = "SET_ORDER";

const initState = {
  order: {
    status: "",
    id: "",
    products: [],
    price: 0,
  },
};

const OrderReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ORDER: {
      return {
        ...state,
        order: {
          status: action.data.order.status,
          products: action.data.order.products,
          price: action.data.order.price,
          id: action.data.order._id,
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
