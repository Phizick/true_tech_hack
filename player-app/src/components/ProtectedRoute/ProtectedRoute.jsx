import {Route,Redirect} from "react-router-dom";

export const ProtectedRoute = ({children, ...rest }) => {

    return (
        <Route
            {...rest}
            render={({ location })  =>
                 window.localStorage.getItem('login') && window.localStorage.getItem('password') ? (
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