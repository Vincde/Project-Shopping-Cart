export default function Home({items, onClick}){

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
                                <h3>Name: {el} </h3>
                                <p>Descrizione</p>
                                <button onClick={onClick}>Add to cart</button>
                            </div>
                        )
                    })}
                </section>
            </main>
        </div>
    );
}