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
                <h1 className={styles.checkoutTitle}>Checkout</h1>
                <section className={styles.personalSection}>
                    <h2>Personal Details</h2>
                    <div>
                        <label htmlFor="name">Name and Surname: </label>
                        <input type="text" id="name" />
                    </div>
                
                    <div>
                        <label htmlFor="address">Address: </label>
                        <input type="text" id="address" />
                    </div>
                </section>
                <section className={styles.paymentSection}>
                    <h2>Payment method</h2>
                
                    <div>
                        <label htmlFor="cardNumber">Card number: </label>
                        <input type="number" id="cardNumber" />
                    </div>

                    <div>
                        <label htmlFor="card_owner">Card owner: </label>
                        <input type="text" id="card_owner" />
                    </div>

                    <div>
                        <label htmlFor="card_psw">CVV: </label>
                        <input type="number" id="card_psw" />
                    </div>

                    <div>
                        <label htmlFor="card_expiration">Card expiration date: </label>
                        <input type="date" id="card_expiration" />
                    </div>
                </section>
                <section className={styles.sendPaymentSection}>
                    <button onClick={handlePayment} className={styles.paymentButton}>Pay</button>
                </section>
            </>
            ) : (
                <p>Payment done!</p>
            )}
            
        </div>
    )
}