import React, { useState } from 'react'

const ProductCard = (props) => {
    const [product, setProduct] = useState(props.product);

    const showProduct = () => {
        return(
            <div className="product-card">
                <div style={{height: 100, width: 450, border: "1px solid black", margin: "auto", marginTop: 20}}>
                {product.logo}
                </div>
                <h3>{product.name}</h3>
                Price: <span>${product.price}</span>
                <p>{product.description}</p>
                <button>Add to Cart</button>
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
