import styles from "./Cart.module.css";


export default function Cart({cart, setCart}) {
    return(
        <div className={styles.cart}> {/* non-existent class for now */}
            <div className={styles.cartTitles}>
                <h2>Cart</h2>
                <h2>Recap</h2>
            </div>

            <div>
                <section className={styles.mainContent}>
                    {cart.map((el) => {
                        return(
                            <div>
                                {/* Data on the element */}
                            </div>
                        )
                    })}
                </section>
                <section className={styles.recap}>
                    <div>
                        <h3>Total price: </h3>
                        <button>Checkout</button>
                    </div>
                </section>
            </div>
        </div>
    )
}