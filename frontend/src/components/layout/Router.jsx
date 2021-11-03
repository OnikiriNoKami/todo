import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { LOGIN_PATH } from "../../routes/consts";
import { nonAuthorized } from "../../routes/nonAuthorized";
import { authorized } from "../../routes/authorized";

export default function Router() {
    const authorizationStatus = useSelector(state => state.authorization.authorized);
    return (
        <Switch>
            {!authorizationStatus&&nonAuthorized.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                );
            })}
            {
                authorizationStatus&&authorized.map((route) => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                        />
                    );
                })
            }
            <Redirect to={LOGIN_PATH} />
        </Switch>
    );
}
