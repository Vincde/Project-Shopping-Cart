import { useState } from "react"
import NavBar from "./components/navBar/NavBar"
import { useParams } from "react-router";
import Home from "./components/home/Home"
import "./App.css"

function App() {
  const { location } = useParams();
  /*
    This is the app: here we will
    render all the elements necessary for the three pages.
  */

    /*
      const {items, error, loading} = useItemsFetching();



      export default function useItemsFetching() {
        const [items, setItems] = useState();
        const [loading, setLoading] = useState();
        const [error, setError] = useState();


      }
    
    
    */
  
  

  const [items, setItems] = useState([{name: "hello"}, {name: "Biagio"}]);
  const [cart, setCart] = useState([]);

 return(
  <div>
    <NavBar></NavBar>
    {location === "home" ? (
      <Home items={items} setCart={setCart} cart={cart}></Home>
    ) : null}
  </div>
 )
}

export default App
