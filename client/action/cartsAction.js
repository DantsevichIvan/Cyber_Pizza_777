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
