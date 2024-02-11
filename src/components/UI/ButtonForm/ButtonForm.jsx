import css from "./ButtonForm.module.css";

export const ButtonForm = ({ children }) => {
  return (
    <button className={css.btn} type="submit">
      {children}
    </button>
  );
};
