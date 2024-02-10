import React from "react";
import css from "./ButtonNoBorder.module.css";
import clsx from "clsx";

export const ButtonNoBorder = ({ children, click, isActive }) => {
  const style = clsx(css.button, isActive && css.active);
  return (
    <button className={style} type="button" onClick={click}>
      {children}
    </button>
  );
};
