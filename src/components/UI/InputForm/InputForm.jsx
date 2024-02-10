import React from "react";
import css from "./InputForm.module.css";

export const InputForm = ({ inputType, inputName, children, placeholder }) => {
  return (
    <label className={css.label}>
      {children}
      <input
        className={css.input}
        type={inputType}
        name={inputName}
        placeholder={placeholder}
      />
    </label>
  );
};
