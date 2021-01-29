export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_CATEGORY = "SET_CATEGORY";

const initState = {
  categories: [],
  category: {
    products: [],
  },
};

const CategoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: [...action.data],
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        category: {
          products: [...action.data.products],
        },
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const setCategories = (data) => {
  return {
    type: SET_CATEGORIES,
    data,
  };
};
export const setCategory = (data) => {
  return {
    type: SET_CATEGORY,
    data,
  };
};

export default CategoriesReducer;
