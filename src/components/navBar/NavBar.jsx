import { Link } from "react-router"

export default function NavBar() {
    /*
    This navbar has to be on every page change.
    */

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Go to Shop Page</Link>
                    </li>
                    <li>
                        <Link to="/cart">Go to Cart</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}