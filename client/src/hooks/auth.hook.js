import {useCallback, useEffect, useState} from "react";

const storageName = 'useData';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);

    const login = useCallback((jwtToken, userId, userName) => {
        setToken(jwtToken);
        setUserId(userId);
        setUserName(userName);

        localStorage.setItem(storageName, JSON.stringify({jwtToken, userId, userName}))

    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setUserName(null);
        localStorage.removeItem(storageName)
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.jwtToken) {
            login(data.jwtToken, data.userId, data.userName)
        }

    }, [login]);
    return {token, userId, userName, login, logout}

};