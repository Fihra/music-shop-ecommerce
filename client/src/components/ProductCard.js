import React, { useContext } from 'react'
import { Actions } from './Actions';
import { ProductContext } from './ProductContext';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button } from '@material-ui/core';

const ProductCard = (props) => {
    const { productDispatch, productsData } = useContext(ProductContext);
    const { logo, name, description, price, type } = props.product;  

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
            <>
                <CardHeader
                    title={name}
                    subheader={`$${price}`}
                    subheaderTypographyProps={{color: "primary"}}
                />
                <CardMedia
                    style={{height: 100, width: 100, margin: 'auto'}}
                    image={logo}
                    title={name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button style={{margin: 'auto'}} onClick={() =>handleClick(props.product)}>{checkIfInCart(props.product) ? "Remove from Cart" : "Add to Cart"}</Button>
                </CardActions>
            </>
        )
    }

    return (
        <Card style={{backgroundColor: 'transparent'}}>
            {showProduct()}
        </Card>
    )
}

export default ProductCard
