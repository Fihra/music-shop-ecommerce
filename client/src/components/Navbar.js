import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {GiGuitarBassHead} from 'react-icons/gi';
import { ProductContext } from './ProductContext'; 
import {Paper, Tabs, Tab, Typography} from '@material-ui/core';
import { Actions } from './Actions';

const Navbar = () => {
    const { productsData, productDispatch } = useContext(ProductContext);

    const changeNav = (value) => {
        productDispatch({type: Actions.GET_CURRENT_PATH, payload: value})
    }

    console.log(productsData.currentPath);
    return(
        <Paper style={{width: "100%", marginTop: "-25px", background: "linear-gradient(40deg, rgba(217,155,48,1) 0%, rgba(255,204,64,1) 79%, rgba(221,221,221,1) 100%)"}}>
            <Link to="/">
            <Typography variant="h2"style={{color: "grey", marginTop: 20}}><GiGuitarBassHead style={{height: 50, width: 50, color: "black"}}/>Music Leftovers</Typography>
            </Link>
            
            <Tabs
                value={productsData.currentPath}
                onChange={changeNav}
                centered
                aria-label="scrollable force tabs"
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="About" to="/about" component={Link} value='/about'/>
                <Tab label="Products" to="/products" component={Link} value='/products'/>
                <Tab label="Contact" to="/contact" component={Link} value='/contact'/>
                <Tab label="Cart" to="/cart" component={Link} value='/cart'/>
            </Tabs>
        </Paper>
    )
}

export default Navbar;