/**
 * @component
 * Компонент Защищенный Роутинг
 * @props
 * children - принимает JSX разметку или страницу, куда можно перейти в случае авторизации
 * route - принимает string, отправляет на указаный роут
 * ...rest - принимает остальные пропсы
 * @returns
 * возвращает страницу указанную в пропсе children или переводит на роут /login
 */

import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        window.localStorage.getItem("login") &&
        window.localStorage.getItem("password") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
