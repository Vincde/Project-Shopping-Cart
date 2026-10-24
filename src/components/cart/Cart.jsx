import { Link } from "react-router";
import styles from "./Cart.module.css";


export default function Cart({cart, handleChangeCart, changeCheck}) {
    let price = cart.reduce((total, el) => {
        if(el.checkedInput === true){
            return total + el.price*el.numberOfPieces;
        }else{
            return total;
        }
    }, 0);
    price = price.toFixed(2);    

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
                                <div className={styles.cartElementImgCheckbox}>
                                    <input type="checkbox" checked={el.checkedInput} onChange={() => changeCheck(el.id)} />
                                    <img src={el.image} alt={imageDescr} />
                                </div>

                                <div>
                                    <h2 className={styles.cartElementTitle}>{el.title}</h2>
                                    <div className={styles.cartElementDescription}>
                                        <p>Category: {el.category}</p>
                                        <p>Description: {el.description}</p>
                                    </div>
                                    <div className={styles.cartElementPrice}>
                                        <p>Price: {el.price}</p>
                                        <p>Rating: {el.rating.rate}</p>
                                    </div>
                                </div>
                                <div className={styles.cartElementQuantity}>
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
                
                {cart.length > 0 ? (
                <section className={styles.recap}>
                    <h3>Total price: €{price}</h3>
                    <button><Link to="/checkout">Checkout</Link></button>
                </section>
                ) : null}
                

            </div>

        </div>
    )
}