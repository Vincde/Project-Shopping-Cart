import { useState } from 'react';
import styles from './shop.module.css';

export default function Shop({items, handleAddItemToCart}){
    const [selectedItem, setSelectedItem] = useState(null);
    const [numberOfItem, setNumberOfItem] = useState(1); 
    const [numberError, setNumberError] = useState(false);
    let selectedElement = null;
    selectedItem !== null ? selectedElement = items.find(el => el.id === selectedItem) : selectedElement = null; 

    function handleSendItem() {
        if(numberOfItem < 1 || numberOfItem > 100) {
            setNumberOfItem(1);
            setNumberError(true);
            return;
        }else{
            handleAddItemToCart(selectedElement, numberOfItem);
            setNumberError(false);
            setNumberOfItem(1);
        }
        
    }

    return(
        <div>
            {selectedElement !== null ? (
                <>
                    <div className={styles.detailSection}>
                        {numberError === true ? (
                        <p className={styles.errorMessage}>The inserted quantity is not valid. Retry with a different one!</p>
                        ) : null}
                        <div className={styles.closeIcon}>
                            <p onClick={() => setSelectedItem(null)}>X</p>
                        </div>
                        <img src={selectedElement.image} alt="image_description" className={styles.imageElement} />
                        <h1>{selectedElement.title}</h1>
                        <p>Description: {selectedElement.description}</p>
                        <p>Price: {selectedElement.price}</p>
                        <p>Rate: {selectedElement.rating.rate}</p>
                        <label htmlFor="numberOfItem">n. of items: </label>
                        <input type="number" id="numberOfItem" className={styles.numberOfItem} value={numberOfItem} onChange={(e) => setNumberOfItem(e.target.value)} />
                        <button className={styles.changeQuantityButton} onClick={() => setNumberOfItem((prev) => prev + 1)}>+</button>
                        <button className={styles.changeQuantityButton} onClick={() => setNumberOfItem((prev) => prev - 1)}>-</button>
                        <button onClick={handleSendItem}>Add to Cart</button>
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