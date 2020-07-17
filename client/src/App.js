import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import {useRoutes} from './routes';
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/auth.hook";


function App() {
    const {token, userId, login, logout} = useAuth();
    const isAuthenticated = !!token;
    const routers = useRoutes(isAuthenticated);

    return (
        <AuthContext.Provider value={{token, userId, login, logout}}>
            <Router>
                <div className="wrapper-app">
                    {routers}
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
