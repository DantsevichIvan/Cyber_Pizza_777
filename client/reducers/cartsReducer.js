const SET_CARTS = "SET_CARTS";

const initState = {
  cart: {
    products: [],
    total: 0,
    subtotal: 0,
    discount: 0,
    id: "",
  },
};

const CartsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CARTS: {
      return {
        ...state,
        cart: {
          products: action.data.carts.products,
          subtotal: action.data.carts.subtotal,
          total: action.data.carts.total,
          discount: action.data.carts.discount,
          id: action.data.carts._id,
        },
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const setCarts = (data) => {
  return {
    type: SET_CARTS,
    data,
  };
};

export default CartsReducer;
