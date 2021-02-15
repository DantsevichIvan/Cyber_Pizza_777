import React from 'react';
import {Field} from "formik";
import s from './Select.module.css'

const Select = ({classname, selects, handleChange, title, error}) => {
  return (
    <div className={classname}>
      <label htmlFor="">{title}</label>
      <Field name="categories" as="select" onChange={handleChange} className={s.select}>
        <option value="" defaultValue>
          Select Categories
        </option>
        {selects.map((item) => {
          return (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          );
        })}
      </Field>
      <span className={s["error-message"]}>{error}</span>
    </div>
  );
};

export default Select;
