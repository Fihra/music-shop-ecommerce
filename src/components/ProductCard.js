import React, { useState, useContext } from 'react'
import { Actions } from './Actions';
import { ProductContext } from './ProductContext';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button } from '@material-ui/core';

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
            // <div className="product-card">
            //     <div style={{height: 100, width: 450, border: "1px solid black", margin: "auto", marginTop: 20}}>
            //     <img style={{height: 100, width: 100}}src={product.logo} alt={product.description}/>
            //     </div>
            //     <h3>{product.name}</h3>
            //     Price: <span>${product.price}</span>
            //     <p>{product.description}</p>
            //     <button onClick={() => handleClick(product)}>{checkIfInCart(product) ? "Remove from Cart" : "Add to Cart"}</button>
            // </div>
            <>
                <CardHeader
                    title={product.name}
                    subheader={`$${product.price}`}
                    subheaderTypographyProps={{color: "primary"}}
                />
                <CardMedia
                    style={{height: 100, width: 100, margin: 'auto'}}
                    image={product.logo}
                    title={product.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button style={{margin: 'auto'}} onClick={() =>handleClick(product)}>{checkIfInCart(product) ? "Remove from Cart" : "Add to Cart"}</Button>
                </CardActions>
            </>
        )
    }

    return (
        <Card>
            {/* {product !== null ? showProduct() : ""} */}
            {showProduct()}
        </Card>
    )
}

export default ProductCard
