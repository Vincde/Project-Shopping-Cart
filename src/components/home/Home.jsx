export default function Home({items, handleCart, cart}){

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
                            <div>
                                <h3>Name: {el.name} </h3>
                                <p>Descrizione</p>
                                <button onClick={() => handleCart([...cart, el])}>Add to cart</button>
                            </div>
                        )
                    })}
                </section>
            </main>
        </div>
    );
}