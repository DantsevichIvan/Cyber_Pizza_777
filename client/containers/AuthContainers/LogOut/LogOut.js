import React from "react";
import { useDispatch } from "react-redux";
import s from "./BtnLogOut.module.css";
import { logOut } from "../../../action/authAction";
import { useHistory } from "react-router-dom";

const LogOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch(logOut());
    history.push("/");
  };
  return (
    <div className={s.btn_logOut}>
      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default LogOut;
