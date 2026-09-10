import { useState } from "react"
import NavBar from "./components/navBar/NavBar"

function App() {
  /*
    This is the app: here we will
    render all the elements necessary for the three pages.
  */
  const [items, setItems] = useState();
    

 return(
  <NavBar></NavBar>
 )
}

export default App
