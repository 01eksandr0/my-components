import React, { useState } from "react";
import css from "./MyFormPage.module.css";
import { ButtonNoBorder } from "../UI/ButtonNoBorder/ButtonNoBorder";
import clsx from "clsx";
import { FormReg } from "../FormReg/FormReg";
export const MyFormPage = () => {
  const [flip, setFlip] = useState(false);
  const [btnGo, setBtnGo] = useState(true);
  const [btnReg, setBtnReg] = useState(false);
  const style = clsx(css.formContainer, flip && css.isActive);
  const openFormReg = () => {
    setFlip(true);
    setBtnGo(false);
    setBtnReg(true);
  };
  const openFormGo = () => {
    setFlip(false);
    setBtnGo(true);
    setBtnReg(false);
  };
  return (
    <div className={css.formPage}>
      <div className={css.pageContent}>
        <ul className={css.listBtn}>
          <li>
            <ButtonNoBorder click={openFormGo} isActive={btnGo}>
              Увійти
            </ButtonNoBorder>
          </li>
          <li>
            <ButtonNoBorder click={openFormReg} isActive={btnReg}>
              Зареєструватися
            </ButtonNoBorder>
          </li>
        </ul>
        <div className={style}>
          <FormReg />
        </div>
      </div>
    </div>
  );
};
