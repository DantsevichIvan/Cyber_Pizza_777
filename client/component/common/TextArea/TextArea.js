import React from 'react';
import {Field} from "formik";
import s from "./TextArea.module.css";

const TextArea = ({classname,title,error,value,handleChange,name}) => {
  return (
    <div className={classname}>
      <label htmlFor="">{title}</label>
      <Field name={name} as="textarea" className={s.textArea} value={value} onChange={handleChange} />
      <span className={s["error-message"]}>{error}</span>
    </div>
  );
};

export default TextArea;
