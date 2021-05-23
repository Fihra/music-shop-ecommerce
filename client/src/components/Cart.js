import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from './ProductContext';
import { Actions } from './Actions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Slide, Typography} from '@material-ui/core';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
    const [ currentTotal, setCurrentTotal ] = useState(0);
    const {productDispatch, productsData} = useContext(ProductContext);
    const myCart = productsData.myCart;

    const rows =() => {
        const fieldNames = ["Picture", "Name", "Price", ""];

        return fieldNames.map((field, i) => {
            return <TableCell key={i} style={{fontWeight: "bold"}}>{field}</TableCell>
        } )
    }

    const checkCart = () => {
        return myCart && myCart !== "";
    }

    const handleClick = (selectedProduct) => {
        productDispatch({type: Actions.DELETE_FROM_CART, payload: selectedProduct.id});
    }

    const showProducts = () => {
        if(checkCart()){
            return myCart.map((item, i) => {
                return (
                    <Slide in={item} onExit={() => handleClick(item)}>
                    <TableRow key={i}>
                        <TableCell><img src={item.logo} alt={item.name} style={{height: 100, width: 100}}/></TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>${item.price}</TableCell>
                        <TableCell><Button color="secondary" onClick={()=> handleClick(item)}>x</Button></TableCell>
                    </TableRow>
                    </Slide>
                )
            } )
        }
    }

    const makePayment = (token) => {
        const body = {
            token,
            myCart
            
        }
        axios.post("http://localhost:3001/payment", { body })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    useEffect(() => {
        let tempTotal = 0;
        if(checkCart()){
            myCart.forEach((item) => {
                return tempTotal += item.price;
            })
            return setCurrentTotal(tempTotal);
        }
        return setCurrentTotal(0);
    }, [myCart])

    return (
        
        <div>
            <Slide direction="right" in={true} timeout={1500} mountOnEnter unmountOnExit>
            <Typography variant="h3">My Shopping Cart</Typography>
            </Slide>
            <div style={{alignItems: "center"}}>
            <Typography variant="h4">Total Cost Due: <Typography variant='h5' style={{color: 'green'}}>${currentTotal}</Typography></Typography>     
                <StripeCheckout stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
                    token={makePayment}
                    name="Purchase"
                    amount={currentTotal * 100}
                >
                    <Button style={{top: 20, color: '#cc8800'}}>Pay Now Here</Button>
                </StripeCheckout>
            </div> 
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {rows()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { showProducts()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Cart;
