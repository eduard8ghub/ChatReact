import { useCallback, useState } from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }
            const response = await fetch(url, {method, body, headers});
            const data = await response.json();
            if(!response.ok) {
                setError(data.message);
                throw new Error(data.message || 'Something wrong!');
            }
            setLoading(false);
            return data;

        } catch (e) {
            throw e;
        }

    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {loading, error, request, clearError}
};