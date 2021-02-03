import React from "react";
import s from "../../PlaceOrderPage/PlaceOrderPage.module.css";

const Input = ({
  classname,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  errors,
  touched,
}) => {
  return (
    <div className={s[classname]}>
      <label htmlFor="">{name}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <span>{errors && touched && errors}</span>
    </div>
  );
};

export default Input;
