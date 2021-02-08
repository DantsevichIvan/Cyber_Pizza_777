import { setOrder } from "../reducers/orderReducer";

export const createOrder = () => async (dispatch) => {
  const res = await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
