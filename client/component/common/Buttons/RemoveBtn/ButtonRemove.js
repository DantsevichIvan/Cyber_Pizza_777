import React from "react";
import s from "./ButtonRemove.module.css";
import cn from "classnames";

const ButtonRemove = ({
  remove,
  id,
  classNameRoot,
  classNameLeft,
  classNameRight,
}) => {
  return (
    <div
      className={cn(s.close_container, classNameRoot)}
      onClick={() => remove(id)}
    >
      <div className={cn(s.leftright, classNameLeft)}></div>
      <div className={cn(s.rightleft, classNameRight)}></div>
    </div>
  );
};

export default ButtonRemove;
