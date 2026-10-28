import { useState } from 'react';
import styles from './shop.module.css';

export default function Shop({items, handleAddItemToCart}){
    const [selectedItem, setSelectedItem] = useState(null);
    let selectedElement;
    selectedItem !== null ? selectedElement = items.find(el => el.id === selectedItem) : null; 


    return(
        <div>
            {selectedElement !== null ? (
                <>
                    <div>
                        <div>
                            <p onClick={() => setSelectedItem(null)}>X</p>
                        </div>
                        <h1>{selectedElement.title}</h1>
                        <p>{selectedElement.description}</p>
                        <p>{selectedElement.price}</p>
                        <p>{selectedElement.rating.rate}</p>
                        <button onClick={() => handleAddItemToCart(selectedElement)}>Add to Cart</button>
                    </div>
                </>
            ) 
            : 
            (
            <>
            <h1>Shop</h1>
            <div>
                {items.map((el) => {
                    return(
                        <div onClick={() => setSelectedItem(el.id)}>
                            <img src={el.image} alt={`image n. ${el.id}`} />
                            <p>Title: {el.title}</p>
                        </div>
                    )
                })}
            </div>
            </>
            )}
            
        </div>
    )
}