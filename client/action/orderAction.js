import { setOrder } from "../reducers/orderReducer";

export const createOrder = (order) => async (dispatch) => {
  const res = await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order: order }),
  });
  const result = await res.json();
  dispatch(setOrder(result));
};

export const getStatus = (id) => async (dispatch) => {
  const res = await fetch("/api/order/" + id, {
    method: "GET",
  });
  const result = await res.json();
  dispatch(setOrder(result));
};
