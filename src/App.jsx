// import { useState } from "react"
import NavBar from "./components/navBar/NavBar"
import { useParams } from "react-router";
import Home from "./components/home/Home"
import styles from "./App.module.css";

function App() {
  const { location } = useParams();
  /*
    This is the app: here we will
    render all the elements necessary for the three pages.
  */
  // const [items, setItems] = useState({});


 return(
  <div className={styles}>
    <NavBar></NavBar>
    {location === "home" ? (
      <Home></Home>
    ) : null}
  </div>
 )
}

export default App
