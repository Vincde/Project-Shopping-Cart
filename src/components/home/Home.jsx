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
                                <h3>Name: {el.title} </h3>
                                <p>Description</p>
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