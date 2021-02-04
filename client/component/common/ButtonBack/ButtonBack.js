import React from "react";
import s from "./ButtonBack.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ButtonBack = ({ goBack, title }) => {
  return (
    <div className={s["button-back"]}>
      <button onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        {title}
      </button>
    </div>
  );
};

export default ButtonBack;
