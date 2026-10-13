import styles from "./Home.module.css"

function Home({items, handleAddItemToCart}){
    return(
        <div className={styles.homeContainer}>
            <main>
                <section className={styles.title}>
                    <h1>Hello, welcome to our shop!</h1>
                    <h2>See our discounts!</h2>
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
                                <button onClick={() => handleAddItemToCart(el)} className={styles.addToCartBtn}>Add to cart</button>
                            </div>
                        )
                    })}
                </section>
            </main>
        </div>
    );
}


export default Home;