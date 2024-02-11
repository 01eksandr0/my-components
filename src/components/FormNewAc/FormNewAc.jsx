import React from "react";
import css from "./FormNewAc.module.css";
import { InputForm } from "../UI/InputForm/InputForm";
import { ButtonForm } from "../UI/ButtonForm/ButtonForm";
import { CheckboxForm } from "../UI/CheckboxForm/CheckboxForm";

export const FormNewAc = () => {
  return (
    <form className={css.form}>
      <InputForm inputName="Name" inputType="text" placeholder="Your name">
        Імʼя Прізвище
      </InputForm>
      <InputForm inputName="email" inputType="email" placeholder="Your email">
        Твоя електронна пошта
      </InputForm>
      <InputForm
        inputName="passwordOne"
        inputType="password"
        placeholder="Password"
      >
        Придумай пароль
      </InputForm>
      <InputForm
        inputName="passwordTwo"
        inputType="password"
        placeholder="Password"
      >
        Підтверди пароль
      </InputForm>
      <CheckboxForm>Погодитися з умовами користування</CheckboxForm>
      <ButtonForm>Зареєструватися</ButtonForm>
    </form>
  );
};
