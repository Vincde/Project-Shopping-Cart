import { useEffect } from "react"
import { useState } from "react";

export default function Popup({ setPopup }){

    const [countdown, setCountdown] = useState(5);
    
        useEffect(() => {
    
            if(countdown === 0) {
                setPopup((prev) => ({status: false, popupKey: prev.key + 1}));
                return;
            }
    
            const timer = setTimeout(() => {
                 setCountdown((prev) => prev - 1);
            }, 1000);
    
            return () => clearTimeout(timer);
        },[countdown, setPopup]);


    return(
        <div>
            Il prodotto è stato aggiunto al carrello!
            <p></p>
        </div>
    )
}