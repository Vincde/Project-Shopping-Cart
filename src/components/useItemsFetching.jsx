import { useEffect, useState } from "react";

export function useItemsFetching() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/1")
        .then((response) => {
            if(response.status >= 400) {
                throw new Error("server error");
            }
            return response.json();
        })
        .then((response) => setItems([response]))
        .catch((error) => setError(error))
        .finally(() => setLoading(false)); 
    }, []);

    return {items, error, loading}
}