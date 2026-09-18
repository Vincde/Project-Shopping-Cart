import { useState } from "react"
import NavBar from "./components/navBar/NavBar"
import { useParams } from "react-router";
import Home from "./components/home/Home"
import "./App.css"
import { useItemsFetching } from "./components/useItemsFetching";

function App() {
  const { location } = useParams();
  /*
    This is the app: here we will
    render all the elements necessary for the three pages.
  */
  
  
  const {items, error, loading} = useItemsFetching();
  const [cart, setCart] = useState([]);

 return(
  <div>
    <NavBar></NavBar>
    { loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>A network error was encountered</p>
    ) : !loading && !error && location === "home" && (
      <Home items={items} setCart={setCart} cart={cart}></Home>
    )
    };
    
  </div>
 )
}

export default App
