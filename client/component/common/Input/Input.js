import React from "react";
import s from "./Input.module.css";
import { Link } from "react-router-dom";

const Input = ({
  classname,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  type,
  link,
  titleLink,
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
      {link ? (
        <Link to={link} target={"_blank"}>
          {titleLink}
        </Link>
      ) : null}
    </div>
  );
};

export default Input;
