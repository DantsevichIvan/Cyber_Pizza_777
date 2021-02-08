import { setProduct, setProducts } from "../reducers/productsReducer";
import { getCategories } from "./categoriesAction";

export const getProducts = () => async (dispatch) => {
  const res = await fetch("/api/products", {
    method: "GET",
  });
  const result = await res.json();
  dispatch(getCategories());
  dispatch(setProducts(result.products));
};
export const getAllProduct = () => async (dispatch) => {
  const res = await fetch("/api/products", {
    method: "GET",
  });
  const result = await res.json();
  dispatch(setProducts(result.products));
};
export const getProduct = (id) => async (dispatch) => {
  const res = await fetch("/api/products/" + id, {
    method: "GET",
  });
  const result = await res.json();
  dispatch(setProduct(result));
};

export const createProduct = (product) => async (dispatch) => {
  const res = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product: product }),
  });
  const result = await res.json();
  dispatch(getProducts());
};
export const updateProduct = (product) => async (dispatch) => {
  const id = product.id;
  const res = await fetch("/api/products/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product: product }),
  });
  const result = await res.json();
  dispatch(getProducts());
};
export const deleteProduct = (id) => async (dispatch) => {
  const res = await fetch("/api/products/" + id, {
    method: "DELETE",
  });
  const result = await res.json();
  dispatch(getProducts());
};
