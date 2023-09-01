import { useState, useEffect } from 'react';

const useApi = (initialUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(initialUrl);
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [initialUrl]);

    return { data, loading, error };
};

export default useApi;