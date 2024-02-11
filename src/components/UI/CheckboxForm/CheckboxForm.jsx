import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import css from "./CheckboxForm.module.css";

export const CheckboxForm = ({ inputName, children }) => {
  return (
    <label className={css.label}>
      <input className={css.input} type="checkbox" name={inputName} />
      <span className={css.castom}>
        <IoMdCheckmark className={css.icon} />
      </span>
      {children}
    </label>
  );
};
