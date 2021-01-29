const SET_CARTS = "SET_CARTS";

const initState = {
  cart: {
    products: [],
    price: 0,
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
          price: action.data.carts.price,
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
