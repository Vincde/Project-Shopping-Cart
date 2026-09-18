function Home({items, setCart, cart}){
    return(
        <div>
            <main>
                <section>
                    <h1>Hello, welcome to our shop!</h1>
                    <h1>See our discounts!</h1>
                </section>
                <section>
                    {items.map((el) => {
                        return(
                            <div key={el.id}>
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