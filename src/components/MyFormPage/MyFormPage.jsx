import React, { useState } from "react";
import css from "./MyFormPage.module.css";
import { ButtonNoBorder } from "../UI/ButtonNoBorder/ButtonNoBorder";
import clsx from "clsx";
import { FormReg } from "../FormReg/FormReg";
import { FormNewAc } from "../FormNewAc/FormNewAc";
export const MyFormPage = () => {
  const [flip, setFlip] = useState(false);
  const [btnGo, setBtnGo] = useState(true);
  const [btnReg, setBtnReg] = useState(false);
  const [isForm1, setForm1] = useState(true);
  const [isForm2, setForm2] = useState(false);
  const style = clsx(css.formContainer, flip && css.isActive);
  const openFormReg = () => {
    setFlip(true);
    setBtnGo(false);
    setBtnReg(true);
    setTimeout(() => {
      setForm1(false);
      setForm2(true);
    }, 300);
  };
  const openFormGo = () => {
    setFlip(false);
    setBtnGo(true);
    setBtnReg(false);
    setTimeout(() => {
      setForm1(true);
      setForm2(false);
    }, 300);
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
          {isForm1 && <FormReg />}
          {isForm2 && <FormNewAc />}
        </div>
      </div>
    </div>
  );
};
