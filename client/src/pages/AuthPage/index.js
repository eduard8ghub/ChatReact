import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import './AuthPage.sass';
import {Login, Registration} from "../../components";

const AuthPage = () => {
    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__wrapper-form">
                    <Switch>
                        <Route path='/login' exact>
                            <Login/>
                        </Route>
                        <Route path='/signup' exact>
                            <Registration/>
                        </Route>
                        <Redirect to='/signup' />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;