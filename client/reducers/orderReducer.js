const SET_ORDER = "SET_ORDER";
const SET_ALL_ORDERS = "SET_ALL_ORDERS";

const initState = {
  order: {
    status: "",
    id: "",
    products: [],
    price: 0,
    order_number: 0,
  },
  orders: [],
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
          order_number: action.data.order_number,
        },
      };
    }
    case SET_ALL_ORDERS: {
      return {
        ...state,
        orders: [...action.data.orders],
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
export const setOrders = (data) => {
  return {
    type: SET_ALL_ORDERS,
    data,
  };
};

export default OrderReducer;
