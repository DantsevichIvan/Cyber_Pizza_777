import { setOrder, setOrders } from "../reducers/orderReducer";

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
export const getOrder = (id) => async (dispatch) => {
  const res = await fetch("/api/admin/order/" + id, {
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
      status: "Pending",
    }),
  });
  const result = await res.json();
  dispatch(getStatus(result.id));
};

export const getAllOrders = () => async (dispatch) => {
  const res = await fetch("/api/order/", {
    method: "GET",
  });
  const result = await res.json();
  dispatch(setOrders(result));
};

export const getStatusCode = (code) => async (dispatch) => {
  const res = await fetch("/api/order/" + code, {
    method: "GET",
  });
  const result = await res.json();
  console.log(result)
  dispatch(setOrder(result));
}
