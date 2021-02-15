import { clearCarts, setCarts } from "../reducers/cartsReducer";

export const createCarts = () => async (dispatch) => {
  const res = await fetch("/api/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  dispatch(setCarts(result));
};
export const addProductForCarts = (product, id) => async (dispatch) => {
  const res = await fetch(`/api/carts/${id}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product: product }),
  });
  const result = await res.json();
  dispatch(getCarts(result.id));
};
export const getCarts = (id) => async (dispatch) => {
  const res = await fetch("/api/carts/" + id, {
    method: "GET",
  });
  const result = await res.json();
  dispatch(setCarts(result));
};

export const addCoupon = (id, value, total) => async (dispatch) => {
  const res = await fetch(`/api/carts/${id}/code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ coupon: value.coupon, total }),
  });
  const result = await res.json();
  dispatch(getCarts(result.id));
};

export const deleteProductToCart = (id_Cart, id_Prod) => async (dispatch) => {
  const res = await fetch(`/api/carts/${id_Cart}/items/` + id_Prod, {
    method: "DELETE",
  });
  const result = await res.json();
  dispatch(getCarts(result.id));
};
export const deleteCart = (id_Cart) => async (dispatch) => {
  const res = await fetch(`/api/carts/` + id_Cart, {
    method: "DELETE",
  });
  const result = await res.json();
  dispatch(clearCarts());
};

export const updateProductToCart = (id_Cart, id_Prod, product) => async (
  dispatch
) => {
  const res = await fetch(`/api/carts/${id_Cart}/items/` + id_Prod, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ price: product.price }),
  });
  const result = await res.json();
  dispatch(getCarts(result.id));
};
