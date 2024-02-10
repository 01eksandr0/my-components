import "./App.css";
import { MyFormPage } from "./MyFormPage/MyFormPage";

export const App = () => {
  return (
    <>
      <div className="bg background"></div>
      <div className="bg midground"></div>
      <div className="bg foreground"></div>
      <MyFormPage />
    </>
  );
};
