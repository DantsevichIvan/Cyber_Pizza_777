export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";

const initState = {
  products: [],
  product: {
    name: "",
    description: "",
    image: "",
    price: 0,
    weight: 0,
    id: "",
  },
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: [...action.data],
      };
    }
    case SET_PRODUCT: {
      return {
        ...state,
        product: {
          name: action.data.product.name,
          description: action.data.product.description,
          image: action.data.product.image,
          price: action.data.product.price,
          weight: action.data.product.weight,
          id: action.data.product._id,
        },
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const setProducts = (data) => {
  return {
    type: SET_PRODUCTS,
    data,
  };
};
export const setProduct = (data) => {
  return {
    type: SET_PRODUCT,
    data,
  };
};

export default ProductsReducer;
