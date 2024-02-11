import React from "react";
import css from "./FormReg.module.css";
import { InputForm } from "../UI/InputForm/InputForm";
import { ButtonForm } from "../UI/ButtonForm/ButtonForm";

export const FormReg = () => {
  return (
    <form className={css.form}>
      <InputForm inputName="email" inputType="email" placeholder="Email">
        Електронна пошта
      </InputForm>
      <InputForm
        inputName="password"
        inputType="password"
        placeholder="Password"
      >
        Пароль
      </InputForm>
      <ButtonForm>Увійти</ButtonForm>
    </form>
  );
};
