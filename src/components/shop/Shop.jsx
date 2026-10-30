import { useState } from 'react';
import styles from './shop.module.css';

export default function Shop({items, handleAddItemToCart}){
    const [selectedItem, setSelectedItem] = useState(null);
    let selectedElement = null;
    selectedItem !== null ? selectedElement = items.find(el => el.id === selectedItem) : selectedElement = null; 


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
            <div className={styles.shopContainer}>
            <h1 className={styles.title}>Shop</h1>
            <div className={styles.itemsList}>
                {items.map((el) => {
                    return(
                        <div key={el.id} onClick={() => setSelectedItem(el.id)} className={styles.singleItem}>
                            <div className={styles.singleItemBorder}>
                                <img src={el.image} alt={`image n. ${el.id}`} />
                                <p>{el.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
            )}
            
        </div>
    )
}