import React from "react";
import cn from "classnames";
import s from "./Button.module.css";

const Button = ({ classname, title, method, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={cn(s.wrap, classname)}
      onClick={() => method()}
    >
      {title}
    </button>
  );
};

export default Button;
