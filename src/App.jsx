import NavBar from "./components/navBar/NavBar"
import { useParams } from "react-router";
import Home from "./components/home/Home"
import "./App.css"
import { useItemsFetching } from "./components/useItemsFetching";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import useCart from "./components/useCart";
import Shop from "./components/shop/Shop";

function App() {
  const { location } = useParams();
  /*
    New objective: put a number near the cart icon of NavBar
    that represents the items present in the cart.
    The steps should be: 
      - add cart as a prop to NavBar
      - Inside navBar, create a variable to get the number
      - Put a span element inside the Link, next to img
      WARNING: this method makes most test to fail.
      The issue is probably related to how many tests
      starts with "/Home" as initial entry point, which
      doesn't count the cart as part of the component
  */

  
  
  const {items, error, loading} = useItemsFetching();
  const {cart, setCart, handleAddItemToCart, handleChangeCart, changeCheck} = useCart();

 return(
  <div>
    <NavBar></NavBar>
    { loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>A network error was encountered</p>
      ) : location === "home" ? (
        <Home items={ items } handleAddItemToCart={handleAddItemToCart}></Home>
      ) : location === "cart" ? (
        <Cart cart={ cart } handleChangeCart={handleChangeCart} changeCheck={changeCheck}></Cart>
      ) : location === "checkout" ? (
        <Checkout cart={ cart } setCart={setCart} ></Checkout>
      ) : location === "shop" ? (
        <Shop items={ items } handleAddItemToCart={handleAddItemToCart}></Shop>
      ) : null
    }
    
  </div>
  )
}

export default App
