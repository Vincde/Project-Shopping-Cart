import { Link } from "react-router"
import styles from "./navBar.module.css";
import cartIcon from "./../../assets/cart_icon.svg";
import homeIcon from "./../../assets/home_icon.svg";
import shopIcon from "./../../assets/shop_icon.svg";


export default function NavBar({cart}) {
    const cartItems = cart.length;

    return(
        <nav className={styles.navBar}>
            <ul className={styles.navBarList}>
                <li>
                    <Link to="/home" className={styles.link}><img src={homeIcon} alt="home" /></Link>
                </li>
                <li>
                    <Link to="/shop" className={styles.link}><img src={shopIcon} alt="shop" /></Link>
                </li>
                <li>
                    <Link to="/cart" className={styles.link}><img src={cartIcon} alt="cart" /><span className={styles.cartNumbersIcon}>{cartItems}</span></Link>
                </li>
            </ul>
        </nav>
    )
}