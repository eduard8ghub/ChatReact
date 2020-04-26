import {useCallback, useEffect, useState} from "react";

const storageName = 'useData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, userId) => {
    setToken(jwtToken);
    setUserId(userId);

    localStorage.setItem(storageName, JSON.stringify({jwtToken, userId}))

  }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem(storageName)
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));

        if(data && data.jwtToken) {
            login(data.jwtToken, data.userId)
        }

    }, [login]);


    return {token, userId, login, logout}

};