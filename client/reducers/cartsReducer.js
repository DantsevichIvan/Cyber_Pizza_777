const SET_CARTS = "SET_CARTS";

const initState = {
  products: [],
  price: 0,
  discount: 0,
};

const CartsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CARTS: {
      return {
        ...state,
        products: action.data.carts.products,
        price: action.data.carts.price,
        discount: action.data.carts.discount,
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
