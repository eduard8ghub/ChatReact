import {createContext} from "react";

function noop() {
}

export const AuthContext = createContext({
    token: null,
    userId: null,
    userName: null,
    isAuthenticated: false,
    login: noop,
    logout: noop
});