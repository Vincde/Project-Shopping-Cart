import styles from "./ErrorPage.module.css";
import { Link } from "react-router";

export default function ErrorPage() {
    return(
        <div className={styles.errorPage}>
            <h1>Oh! there seems to be a problem here!</h1>
            <Link to="./"></Link>
        </div>
    )
}