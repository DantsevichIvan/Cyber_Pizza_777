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

export const updateOrder = (order, id) => async (dispatch) => {
  const res = await fetch(`/api/order/` + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderValues: order,
      status: "The order is accepted and processed",
    }),
  });
  debugger;
  const result = await res.json();
  dispatch(getStatus(result.id));
};
