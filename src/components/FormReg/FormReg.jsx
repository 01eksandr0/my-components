import React from "react";
import css from "./FormReg.module.css";
import { InputForm } from "../UI/InputForm/InputForm";

export const FormReg = () => {
  return (
    <form className={css.form}>
      <InputForm inputName="email" inputType="email" placeholder="Email">
        Електронна пошта
      </InputForm>
    </form>
  );
};
