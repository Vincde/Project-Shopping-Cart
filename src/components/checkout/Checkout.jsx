import { useState } from "react";
import styles from "./Checkout.module.css";

export default function Checkout({ cart, setCart }){
    const [payment, setPayment] = useState(false);

    function handlePayment(){
        setPayment(true);
        setCart([]);
    }


    return(
        <div className={styles.checkoutPage}>
            {payment === false ? (
            <>
                <h1>Checkout</h1>
                <section>
                    <h2>Personal Details</h2>
                    <label htmlFor="name">Name and Surname: </label>
                    <input type="text" id="name" />
                
                    <label htmlFor="address">Address: </label>
                    <input type="text" id="address" />
                </section>
                <section>
                    <h2>Payment method</h2>
                
                    <label htmlFor="cardNumber">Card number: </label>
                    <input type="number" id="cardNumber" />

                    <label htmlFor="card_owner">Card owner: </label>
                    <input type="text" id="card_owner" />

                    <label htmlFor="card_psw">CVV: </label>
                    <input type="number" id="card_psw" />

                    <label htmlFor="card_expiration">Card expiration date: </label>
                    <input type="date" id="card_expiration" />
                </section>
                <section>
                    <button onClick={handlePayment}>Pay</button>
                </section>
            </>
            ) : (
                <p>Payment done!</p>
            )}
            
        </div>
    )
}