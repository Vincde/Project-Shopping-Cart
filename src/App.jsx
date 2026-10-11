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

  function handleAddItemToCart(newItem){
    const filteredCart = cart.filter(
      (oldItem) => oldItem.id === newItem.id
    );

    if(filteredCart.length === 0){
      const finalItem = structuredClone(newItem);
      finalItem.numberOfPieces = 1;
      setCart(prev => [...prev, finalItem]);
    }else{
      const unFilteredCart = cart.filter(
        (oldItem) => oldItem.id !== newItem.id
      );

      const finalItem = structuredClone(newItem);
      finalItem.numberOfPieces = filteredCart[0].numberOfPieces + 1;
      setCart([...unFilteredCart, finalItem]);
    }
  }


 return(
  <div>
    <NavBar></NavBar>
    { loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>A network error was encountered</p>
    ) : !loading && !error && location === "home" && (
      <Home items={items} setCart={handleAddItemToCart}></Home>
    )
    }
    
  </div>
 )
}

export default App
