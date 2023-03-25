import { Route, Switch } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import stylesApp from "./App.module.css";
export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route>
        <Route path="*" exact={true}>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};
