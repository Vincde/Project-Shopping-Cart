import styles from "./Home.module.css"

function Home({items, setCart, cart}){
    return(
        <div>
            <main>
                <section className={styles.title}>
                    <h1>Hello, welcome to our shop!</h1>
                    <h2>See our discounts!</h2>
                </section>
                <section className={styles.itemsContainer}>
                    {items.map((el) => {
                        return(
                            <div key={el.id} className={styles.singleItem}>
                                <h3>{el.title} </h3>
                                <img src={el.image} alt="product image" />
                                <p>Description: {el.description}</p>
                                <p>Price: {el.price}</p>
                                <p>Rating: {el.rating.rate}</p>
                                <button onClick={() => setCart([...cart, el])}>Add to cart</button>
                            </div>
                        )
                    })}
                </section>
            </main>
        </div>
    );
}


export default Home;