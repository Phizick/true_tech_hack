import { useDispatch } from "react-redux";
import stylesMainPage from "./MainPage.module.css";
import { testAction } from "../../service/slices/test";
export const MainPage = () => {
  const dispatch = useDispatch();
  const testRedux = () => {
    dispatch(testAction());
  };
  return (
    <div>
      <h1>MainPage</h1>
      <button onClick={testRedux}>test Redux</button>
    </div>
  );
};
