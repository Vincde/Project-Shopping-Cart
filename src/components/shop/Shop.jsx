import { useState } from 'react';
import styles from './shop.module.css';

export default function Shop({items, handleAddItemToCart}){
    const [selectedItem, setSelectedItem] = useState(null);

    // handleItemDetails should change the selectedItem to open details of the selected item
    // on the details page clicking the x should call the function again. 
    // handleAddItemToCart should only be used to add the item to cart when the add to cart button is pressed

    return(
        <div>
            <h1>Shop</h1>
            <div>
                {items.map((el) => {
                    return(
                        <div onClick={handleItemDetails}>
                            <img src="" alt="" />
                            <p>Title: </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}