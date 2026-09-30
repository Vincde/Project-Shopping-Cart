import { useState } from "react"
import NavBar from "./components/navBar/NavBar"
import { useParams } from "react-router";
import Home from "./components/home/Home"
import "./App.css"
import { useItemsFetching } from "./components/useItemsFetching";
import frutta1 from "./assets/frutta1.jpg";
import frutta2 from "./assets/frutta2.jpg";
import frutta3 from "./assets/frutta3.jpg";

function App() {
  const { location } = useParams();
  /*
    This is the app: here we will
    render all the elements necessary for the three pages.
  */
  
  
  // const {items, error, loading} = useItemsFetching();
  const loading = false;
  const error = false;
  const items = [
    {id: 1, title: "hello", description: "AH u here!", image: frutta1, price: "3.15", rating: {rate: 4.5}},
    {id: 2, title: "Element 2", description: "Element 2 is a good thing", image: frutta2, price: 3.13, rating: {rate: 0.0}},
    {id: 3, title: "Element 3", description: "Elm 3 is not a good thing anymore, but it used to be", image: frutta3, price: 3.54, rating: {rate: 1.5}}
  ];
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
