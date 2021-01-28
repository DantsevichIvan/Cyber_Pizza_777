export const SET_CATEGORIES = "SET_CATEGORIES";

const initState = {
  categories: [],
  category: {
    product: [],
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

export default CategoriesReducer;
