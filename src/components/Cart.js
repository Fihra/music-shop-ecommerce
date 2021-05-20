import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from './ProductContext';
import { Actions } from './Actions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Slide} from '@material-ui/core';

const Cart = () => {
    const {productDispatch, productsData} = useContext(ProductContext);
    const myCart = productsData.myCart;

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
                    <TableRow key={i}>
                        <TableCell><img src={item.logo} alt={item.name} style={{height: 100, width: 100}}/></TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>${item.price}</TableCell>
                        <TableCell><Button onClick={()=> handleClick(item)}>Delete</Button></TableCell>
                    </TableRow>
                )
            } )
        }
    }

    // useEffect(() => {
    //     productDispatch({type: Actions.GET_PRODUCTS, payload: localStorage.getItem("myCart")})
    //     if(localStorage.getItem("myCart") !== null){
    //       productDispatch({type: Actions.EXISTING_CART})
    //     }
    //     if(localStorage.getItem("myCart") === "[]") localStorage.clear();
    //   }, [])

    const getTotal = () => {
        let tempTotal = 0;
        if(checkCart()){
            myCart.forEach((item) => {
                return tempTotal += item.price;
            })
            return tempTotal;
        }
        return 0;
        // setTotal(tempTotal);
    }
    return (
        <div>
            <Slide direction="right" in={true} timeout={1500} mountOnEnter unmountOnExit>
            <h2>My Shopping Cart</h2>
            </Slide>
            {/* <div>
            {myCart === "" && myCart.length <= 0  ? "Nothing in Cart": showItems()}
            </div> */}
            <h4>Total Cost Due: ${getTotal()}<Button>Pay Here</Button></h4>
            
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
