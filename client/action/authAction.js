import {
  setAuthUser,
  setUser,
  successErrorAuth,
  successErrorData,
  successLogOut,
} from "../reducers/authReducer";

export const login = (values) => async (dispatch) => {
  const res = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(values),
  });
  if (res.status === 200) {
    const result = await res.json();
    console.log(result);
    dispatch(setUser(result.data));
  } else if (res.status === 400) {
    const result = await res.json();
    dispatch(successErrorData(result));
  }
};
export const logOut = () => async (dispatch) => {
  const res = await fetch("/api/user/logout", {
    method: "POST",
  });
  const result = await res.json();
  dispatch(successLogOut());
};
export const registration = (values) => async (dispatch) => {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  if (res.status === 200) {
    const result = await res.json();
    dispatch(setAuthUser());
  } else if (res.status === 400) {
    const result = await res.json();
    dispatch(successErrorData(result));
  }
};

export const getUser = (id) => async (dispatch) => {
  const res = await fetch("/api/user" + id, {
    method: "GET",
  });
  if (res.status === 200) {
    const result = await res.json();
    dispatch(setUser(result.data));
  } else if (res.status === 401) {
    const result = await res.json();
    dispatch(successErrorAuth(result));
  }
};
