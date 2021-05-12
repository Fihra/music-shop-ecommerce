import React, { useEffect, useState, useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from './ProductContext';

const VSTs = () => {
    const [products, setProducts] = useState(null);
    const productContext = useContext(ProductContext);

    useEffect(() => {
        setProducts(productContext.productsData.products);
    }, [productContext])

    const showProducts = () => {
        return products.map((product, i) => {
            console.log(product);
            return <li key={i}><ProductCard key={i} product={product}/></li>
        })
    }
    return (
        <div>
           <h2>All VSTs</h2>
           <ul className="products-list">
            {products ? showProducts() : ""}
            </ul>
        </div>
    )
}

export default VSTs;
