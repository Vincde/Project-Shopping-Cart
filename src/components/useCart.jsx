import { useState } from "react";

export default function useCart(){
    const [cart, setCart] = useState([]);

  function handleAddItemToCart(newItem){
    const filteredCart = cart.filter(
      (oldItem) => oldItem.id === newItem.id
    );

    if(filteredCart.length === 0){
      const finalItem = structuredClone(newItem);
      finalItem.numberOfPieces = 1;
      finalItem.checkedInput = true;
      setCart(prev => [...prev, finalItem]);
    }else{
      const unFilteredCart = cart.filter(
        (oldItem) => oldItem.id !== newItem.id
      );
      filteredCart[0].numberOfPieces += 1;
      unFilteredCart.push(filteredCart[0]);
      setCart([...unFilteredCart]);
    }
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