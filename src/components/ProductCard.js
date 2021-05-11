import React, { useState } from 'react'

const ProductCard = (props) => {
    const [product, setProduct] = useState(props.product);

    const showProduct = () => {
        return(
            <>
                {product.logo}
                <span>${product.price}</span>
                <p>{product.description}</p>
            </>
        )
    }

    return (
        <div>
            {product !== null ? showProduct() : ""}
        </div>
    )
}

export default ProductCard
