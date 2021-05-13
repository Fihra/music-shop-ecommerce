import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const Cart = () => {
    const productContext = useContext(ProductContext);
    const myCart = productContext.productsData.myCart;

    const showItems = () => {
        return (
            <div>
                <ul>
                    {myCart.map((item, i) => {
                        return <li key={i}>{item.name} ======= ${item.price}</li>
                    })}
                </ul>
            </div>
        )
    }


    return (
        <div>
            <h2>My Shopping Cart</h2>
            <div>
            {myCart === "" && myCart.length <= 0  ? "Nothing in Cart": showItems()}
            </div>
        </div>
    )
}

export default Cart;
