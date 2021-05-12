import React, { useState, useContext } from 'react'
import { Actions } from './Actions';
import { ProductContext } from './ProductContext';

const ProductCard = (props) => {
    const [product, setProduct] = useState(props.product);
    const { productDispatch } = useContext(ProductContext);

    const showProduct = () => {

        const handleClick = (selectedProduct) => {
            console.log(selectedProduct);
            productDispatch({type: Actions.ADD_TO_CART, payload: selectedProduct})
        }

        return(
            <div className="product-card">
                <div style={{height: 100, width: 450, border: "1px solid black", margin: "auto", marginTop: 20}}>
                {product.logo}
                </div>
                <h3>{product.name}</h3>
                Price: <span>${product.price}</span>
                <p>{product.description}</p>
                <button onClick={() => handleClick(product)}>Add to Cart</button>
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
