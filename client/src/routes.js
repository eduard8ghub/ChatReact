import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {AuthPage, HomePage} from "./pages";


export const useRoutes = isAuthenticated => {
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact><HomePage/></Route>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/:subpage" exact><AuthPage/></Route>
            <Redirect to="/signup" />
        </Switch>
    )

};