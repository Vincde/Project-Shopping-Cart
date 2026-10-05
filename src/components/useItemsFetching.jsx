// import { useEffect, useState } from "react";

/*export function useItemsFetching() {
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

*/

import frutta1 from "./../assets/frutta1.jpg";
import frutta2 from "./../assets/frutta2.jpg";
import frutta3 from "./../assets/frutta3.jpg";

export function useItemsFetching() {
    const loading = false;
      const error = false;
      const items = [
        {id: 1, title: "hello", description: "AH u here!", image: frutta1, price: "3.15", rating: {rate: 4.5}},
        {id: 2, title: "Element 2", description: "Element 2 is a good thing", image: frutta2, price: 3.13, rating: {rate: 0.0}},
        {id: 3, title: "Element 3", description: "Elm 3 is not a good thing anymore, but it used to be", image: frutta3, price: 3.54, rating: {rate: 1.5}},
        {id: 4, title: "Oddio la burro", description: "ahahah", image: "#", price: "4.32", rating: {rate: 2.2}},
    ];

      return {items, error, loading};
}