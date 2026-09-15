import { useEffect } from "react";
import styles from "./ErrorPage.module.css";
import { Link, useNavigate } from "react-router";

export default function ErrorPage() {

    let navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);

        return () => clearTimeout(timer);
    },[navigate]);

    return(
        <div className={styles.errorPage}>
            <h1>Oh! there seems to be a problem here!</h1>
            
            <p>We are automatically redirecting you to the home page in 3s...</p>
            <Link to="/home" className={styles.link}>Or you can click here!</Link>
        </div>
    )
}