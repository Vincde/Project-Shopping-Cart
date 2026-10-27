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
    This is the app: here we will
    render all the elements necessary for the three pages.
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
