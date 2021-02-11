import React from "react";
import cn from "classnames";
import s from "./Button.module.css";

const Button = ({ classname, title, method, disabled, type, value }) => {
  return (
    <button
      disabled={disabled}
      className={cn(s.wrap, classname)}
      onClick={() => method(value)}
      type={type || "button"}
    >
      {title}
    </button>
  );
};

export default Button;
