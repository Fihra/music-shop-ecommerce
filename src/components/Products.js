import React, { useEffect, useState, useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from './ProductContext';
import { makeStyles } from '@material-ui/core/styles';
import { Grid  } from '@material-ui/core';

const Products = () => {
    const [products, setProducts] = useState(null);
    const productContext = useContext(ProductContext);

    useEffect(() => {
        setProducts(productContext.productsData.products);
    }, [productContext])

    const showProducts = () => {
        return products.map((product, i) => {
            // return <li key={i}><ProductCard key={i} product={product}/></li>
            return <Grid item xs={4} key={i}><ProductCard key={i} product={product}/></Grid> 
        })
    }
    console.log(products);
    return (
        // <div>
        //    <h2>All Products</h2>
        //    <ul className="products-list">
        //     {products ? showProducts() : ""}
        //     </ul>
        // </div>
        <Grid container spacing={7} style={{paddingTop: 50}}>
            {products ? showProducts() : ""}    
        </Grid>
    )
}

export default Products;
