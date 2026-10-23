import { useState } from "react";
import styles from "./Checkout.module.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router";

export default function Checkout({ cart, setCart }){
    const [payment, setPayment] = useState(false);
    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(null);

    useEffect(() => {
        if(countdown === null) return;

        if(countdown === 0) {
            navigate("/home");
            return;
        }

        const timerId = setTimeout(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [countdown, navigate]);
    
    function handlePayment(){
        setPayment(true);
        setCart([]);
        setCountdown(3);
    }
    
    

    return(
        <div className={styles.checkoutPage}>
            {payment === false ? (
            <>
                <h1 className={styles.checkoutTitle}>Checkout</h1>
                <section className={styles.summary}>
                    {cart.map((el) => {
                        return(
                        <div key={el.id}>
                            <img src={el.image} alt="cartElement" />
                            <p>{el.title}</p>
                        </div>
                        )
                    })}
                </section>
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
                <div className={styles.paymentRedirect}>
                <p>Payment done!</p>
                <p>You will be redirected to the home page in {countdown}...</p>
                <Link to="/home">Or you can click here!</Link>
                </div>
            )}
            
        </div>
    )
}