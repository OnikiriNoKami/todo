import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LOGIN_PATH } from "../../routes/consts";
import { nonAuthorized } from "../../routes/nonAuthorized";

export default function Router() {
    return (
        <Switch>
            {nonAuthorized.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                );
            })}
            <Redirect to={LOGIN_PATH} />
        </Switch>
    );
}
