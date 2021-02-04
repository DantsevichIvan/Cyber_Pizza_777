import React from "react";
import s from "./ButtonBack.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import cn from "classnames";

const ButtonBack = ({ goBack, title, classname }) => {
  return (
    <div className={cn(s["button-back"], classname)}>
      <button onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        {title}
      </button>
    </div>
  );
};

export default ButtonBack;
