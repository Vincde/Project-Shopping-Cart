import { Link } from "react-router"
import styles from "./navBar.module.css";

export default function NavBar() {
    /*
    This navbar has to be on every page change.
    */

    return(
        <>
            <nav className={styles.list}>
                <ul>
                    <li>
                        <Link to="/home" className={styles.link}>Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className={styles.link}>Go to Shop Page</Link>
                    </li>
                    <li>
                        <Link to="/cart" className={styles.link}>Go to Cart</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}