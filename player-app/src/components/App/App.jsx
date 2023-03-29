/**
 * @component
 * Главный компонент приложения
 * @returns
 * возвращает страницы проекта по роутингу
 */

import { Route, Switch } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import {LoginPage} from "../../pages/LoginPage/LoginPage";
import {PersonalPage} from "../../pages/Personal/PersonalPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTimesCode } from "../../service/slices/timeCodeSlice";
export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTimesCode())
  })
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/" exact={true}>
          <MainPage />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          <LoginPage/>
        </Route>
        <Route path="/personal" exact={true}>
          <PersonalPage/>
        </Route>
        <Route path="*" exact={true}>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};
