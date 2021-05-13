import React, { useState, useContext } from 'react'
import { Actions } from './Actions';
import { ProductContext } from './ProductContext';

const ProductCard = (props) => {
    const [product, setProduct] = useState(props.product);
    const { productDispatch, productsData } = useContext(ProductContext);

    const showProduct = () => {

        const handleClick = (selectedProduct) => {
            if(checkIfInCart(selectedProduct) === false){
                productDispatch({type: Actions.ADD_TO_CART, payload: selectedProduct})
            } else {
                productDispatch({type: Actions.DELETE_FROM_CART, payload: selectedProduct.id})
            }
        }

        const checkIfInCart = (selectedProduct) => {
            if(productsData.myCart === "") return false;
            const myCart = productsData.myCart;
            if(productsData.myCart !== null){
                let itemExistsInCart = myCart.some(product => product["id"] === selectedProduct["id"]);
                return itemExistsInCart;
            } 
            return false;
        }

        return(
            <div className="product-card">
                <div style={{height: 100, width: 450, border: "1px solid black", margin: "auto", marginTop: 20}}>
                {product.logo}
                </div>
                <h3>{product.name}</h3>
                Price: <span>${product.price}</span>
                <p>{product.description}</p>
                <button onClick={() => handleClick(product)}>{checkIfInCart(product) ? "Remove from Cart" : "Add to Cart"}</button>
            </div>
        )
    }

    return (
        <div>
            {product !== null ? showProduct() : ""}
        </div>
    )
}

export default ProductCard
