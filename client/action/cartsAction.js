import { setCarts } from "../reducers/cartsReducer";

export const createCarts = () => async (dispatch) => {
  const res = await fetch("http://localhost:3000/api/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  dispatch(setCarts(result));
};
export const addProductForCarts = (product, id) => async (dispatch) => {
  const res = await fetch(`http://localhost:3000/api/carts/${id}/items`, {
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
  const res = await fetch("http://localhost:3000/api/carts/" + id, {
    method: "GET",
  });
  const result = await res.json();
  dispatch(setCarts(result));
};

export const addCoupon = (id, value) => async (dispatch) => {
  const res = await fetch(`http://localhost:3000/api/carts/${id}/code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ coupon: value.coupon }),
  });
  const result = await res.json();
  dispatch(getCarts(result.id));
};

export const deleteProductToCart = (id_Cart, id_Prod) => async (dispatch) => {
  const res = await fetch(
    `http://localhost:3000/api/carts/${id_Cart}/items/` + id_Prod,
    {
      method: "DELETE",
    }
  );
  const result = await res.json();
  dispatch(getCarts(result.id));
};

export const updateCart = (id) => async (dispatch) => {
  const res = await fetch(`http://localhost:3000/api/carts/` + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
  const result = await res.json();
};
