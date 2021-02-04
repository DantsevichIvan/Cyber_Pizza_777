import { setCategories } from "../reducers/categoriesReducer";
import { setProducts } from "../reducers/productsReducer";

export const getCategories = () => async (dispatch) => {
  const res = await fetch("http://localhost:3000/api/categories", {
    method: "GET",
  });
  const result = await res.json();
  dispatch(setCategories(result.categories));
};
export const getCategory = (category) => async (dispatch) => {
  const res = await fetch(`http://localhost:3000/api/categories/${category}`, {
    method: "GET",
  });
  const result = await res.json();
  dispatch(setProducts(result.products));
};

export const createCategories = (categories) => async (dispatch) => {
  const res = await fetch("http://localhost:3000/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ categories: categories }),
  });
  const result = await res.json();
  dispatch(getCategories());
};
export const updateCategories = (categories) => async (dispatch) => {
  const id = categories.id;
  const res = await fetch("http://localhost:3000/api/categories/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ categories: categories }),
  });
  const result = await res.json();
  dispatch(getCategories());
};
export const deleteCategories = (id) => async (dispatch) => {
  const res = await fetch("http://localhost:3000/api/categories/" + id, {
    method: "DELETE",
  });
  const result = await res.json();
  dispatch(getCategories());
};
