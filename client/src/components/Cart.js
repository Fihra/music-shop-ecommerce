import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from './ProductContext';
import { Actions } from './Actions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Slide, TextField} from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Cart = () => {
    const [ success, setSuccess ] = useState(false);
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    
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

    const handlePay = async () => {
        // e.preventDefault();
        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        //     type: "card",
        //     card: elements.getElement(CardElement)
        // })

        // if(!error){
        //     try{
        //         const { id} = paymentMethod;
        //         const response = await axios.post("http://localhost:3001/payment", {
        //             amount: 1000,
        //             id
        //         })
        //         if(response.data.success){
        //             console.log("Successful payment");
        //             setSuccess(true);
        //         }
        //     } catch(error){
        //         console.log("Error", error);
        //     }
        // } else {
        //     console.log(error.message);
        // }

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
    }
    return (
        
        <div>
            <Slide direction="right" in={true} timeout={1500} mountOnEnter unmountOnExit>
            <h2>My Shopping Cart</h2>
            </Slide>
            {/* <div>
            {myCart === "" && myCart.length <= 0  ? "Nothing in Cart": showItems()}
            </div> */}
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
            <div>
            <h4>Total Cost Due: ${getTotal()}</h4>
                <form style={{margin: "auto",width: 700, height: 500}} onSubmit={() => handlePay()}>
                    <fieldset>
                        <legend>Fill out this form</legend>
                        
                        <TextField style={{padding: 3}} id="standard-basic" label="First Name" name="firstname" type="text" {...register("firstname")}/>

                        <TextField style={{padding: 3}} id="standard-basic" label="Last Name" name="lastname" type="text" {...register("lastname")}/>

                        <TextField style={{padding: 3}} id="standard-basic" label="Address" name="address" type="text" {...register("address")}/>
 
                        <TextField style={{padding: 3}} id="standard-basic" label="City" name="city" type="text" {...register("city")}/>

                        <TextField style={{padding: 3}} id="standard-basic" label="State" name="state" type="text" {...register("state")}/>
  
                        <TextField style={{padding: 3}} id="standard-basic" label="Country" name="country" type="text" {...register("country")}/>
     
                        <TextField style={{padding: 3}}  id="standard-basic" label="Zip Code" name="zipcode" type="number" {...register("zipcode")}/>

                        <TextField style={{padding: 3}} id="standard-basic" label="Email" name="email" type="email" {...register("email")}/>
             
                        <CardElement />
                        <Button type="submit">Pay Now</Button>
                    </fieldset>
                    
                </form>
                
            </div>
            
            {!success ? "" : "Your purchase was succcessful!"}
        </div>
    )
}

export default Cart;
