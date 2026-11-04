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

  
  function handleChangeCart(id, operation) {
    setCart((prev) => {

      if (operation === "x") {
        return prev.filter((el) => el.id !== id);
      }

      return prev.map((el) => {

        if(el.id === id){
          if(operation === "+") return {...el, numberOfPieces: Math.min(100, el.numberOfPieces + 1)}
          if(operation === "-") return {...el, numberOfPieces: Math.max(1, el.numberOfPieces - 1)}
        }

        return el;

      });
    })
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