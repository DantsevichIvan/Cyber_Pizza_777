import React from "react";
import s from "./Input.module.css";

const Input = ({
  classname,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  type,
}) => {
  return (
    <div className={classname}>
      <label htmlFor="">{name}</label>
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <span className={s["error-message"]}>{error}</span>
    </div>
  );
};

export default Input;
