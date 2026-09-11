// import { useState } from "react"
import NavBar from "./components/navBar/NavBar"
import { useParams } from "react-router";
import Home from "./components/home/Home"

function App() {
  const { location } = useParams();
  /*
    This is the app: here we will
    render all the elements necessary for the three pages.
  */
  // const [items, setItems] = useState({});


 return(
  <>
    <NavBar></NavBar>
    {location === "home" ? (
      <Home></Home>
    ) : null}
  </>
 )
}

export default App
