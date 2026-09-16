import { useEffect, useState } from "react";
import styles from "./ErrorPage.module.css";
import { Link, useNavigate } from "react-router";

export default function ErrorPage() {

    const [countdown, setCountdown] = useState(3);

    let navigate = useNavigate();

    useEffect(() => {

        if(countdown === 0) {
            navigate("/home");
            return;
        }

        const timer = setTimeout(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    },[countdown, navigate]);

    return(
        <div className={styles.errorPage}>
            <h1>Oh! there seems to be a problem here!</h1>
            
            <p>We are automatically redirecting you to the home page in {countdown}s...</p>
            <Link to="/home" className={styles.link}>Or you can click here!</Link>
        </div>
    )
}