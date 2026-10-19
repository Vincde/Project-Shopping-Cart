import { Link } from "react-router";
import styles from "./Cart.module.css";


export default function Cart({cart, handleChangeCart}) {
    const price = cart.reduce((total, el) => total + el.price*el.numberOfPieces, 0);

    return(
        <div className={styles.cartContainer}>
            <div className={styles.cartTitles}>
                <h2>Cart</h2>
                <h2>Recap</h2>
            </div>

            <div className={styles.mainContent}>
                <section className={styles.cartSection}>
                    {cart.length > 0 ? (cart.toReversed().map((el, index) => {
                        const imageDescr = "product n." + index;
                        return(
                            <div key={el.id} className={styles.cartElement}>
                                <div>
                                    <img src={el.image} alt={imageDescr} />
                                </div>

                                <div>
                                    <h2>{el.title}</h2>
                                    <p>Category: {el.category}</p>
                                    <p>Description: {el.description}</p>
                                    <p>Price: {el.price}</p>
                                    <p>Rating: {el.rating.rate}</p>
                                </div>
                                <div>
                                    <p>Quantity: {el.numberOfPieces}</p>
                                    <button onClick={() => handleChangeCart(el.id, "+", index)}>+</button>
                                    <button onClick={() => handleChangeCart(el.id, "-", index)}>-</button>
                                    <button onClick={() => handleChangeCart(el.id, "x", index)}>X</button>
                                </div>
                            </div>
                        )
                    })) : (
                        <p>You have no elements in the cart!</p>
                    )}
                </section>

                <section className={styles.recap}>
                    <h3>Total price: €{price}</h3>
                    <button><Link to="/checkout" state={{cart: [...cart]}}>Checkout</Link></button>
                </section>

            </div>

        </div>
    )
}