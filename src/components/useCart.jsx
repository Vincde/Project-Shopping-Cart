import { useState } from "react";

export default function useCart(){
    const [cart, setCart] = useState([]);

  function handleAddItemToCart(newItem){
    setCart((prev) => {
      const foundElement = prev.find((el) => el.id === newItem.id);
      
      if(foundElement) {
        return prev.map((el) => 
          el.id === newItem.id ? { ...el, numberOfPieces: el.numberOfPieces + 1}
          : el
        );
      }

      return [
        ...prev,
        {
          ...newItem,
          numberOfPieces: 1,
          checkedInput: true,
        },
      ];
    });
  }

  
  function handleChangeCart(id, operation, index) {
    const filteredCart = cart.filter((item) => item.id === id);
    let newArray = cart.toReversed();
    let cartWithDeletedItem;

    switch(operation){
      case "+":
        filteredCart[0].numberOfPieces += 1;
        newArray.splice(index, 1, filteredCart[0]);
        newArray = newArray.toReversed();
        setCart([...newArray]);
        break;
      case "-":
        if(filteredCart[0].numberOfPieces <= 1){
          cartWithDeletedItem = newArray.filter(
          (cartItem) => cartItem.id !== id
          );
          cartWithDeletedItem = cartWithDeletedItem.toReversed();
          setCart([...cartWithDeletedItem]);
          break;
        }else{
          filteredCart[0].numberOfPieces -= 1;
          newArray.splice(index, 1, filteredCart[0]);
          newArray = newArray.toReversed();
          setCart([...newArray]);
          break;
        }
      case "x":
        cartWithDeletedItem = newArray.filter(
          (cartItem) => cartItem.id !== id
          );
          cartWithDeletedItem = cartWithDeletedItem.toReversed();
        setCart([...cartWithDeletedItem]);
        break;
    }
  }

  function changeCheck(id) {
    const tempCart = cart.map((el) => {
      if(el.id === id){
        return(
          {
            ...el,
            checkedInput: !el.checkedInput,
          }
        )
      }
      return el;
    })

    setCart([...tempCart]);
  }


  return{
    cart,
    setCart,
    handleAddItemToCart,
    handleChangeCart,
    changeCheck
  }

}