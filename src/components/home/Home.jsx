import { useState } from "react";
import styles from "./Home.module.css"
import Popup from "./../popup/Popup";

function Home({items, handleAddItemToCart}){
    const [popup, setPopup] = useState(false);


    function handleSendToCart(el){
        handleAddItemToCart(el);
        setPopup(true);
    }

    return(
        <div>
            {popup === true ? (<Popup setPopup={setPopup}></Popup>) : (null)}
            <main className={styles.homeContainer}>
                <section className={styles.title}>
                    <h1>Hello, welcome to our shop!</h1>
                    <p>See our discounts!</p>
                </section>
                <section className={styles.itemsContainer}>
                    {items.map((el) => {
                        return(
                            <div key={el.id} className={styles.singleItem}>
                                <img src={el.image} alt="product image" />
                                <h3>{el.title} </h3>
                                <div className={styles.moreInfo}>
                                    <p>Price: {el.price}</p>
                                    <p>Rating: {el.rating.rate}</p>
                                </div>
                                <button onClick={() => handleSendToCart(el)} className={styles.addToCartBtn} >Add to cart</button>
                            </div>
                        );
                    })}
                </section>
            </main>
        </div>
    );
}


export default Home;