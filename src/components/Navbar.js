import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {GiGuitarBassHead} from 'react-icons/gi';
import { ProductContext } from './ProductContext'; 
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs, Tab} from '@material-ui/core';
import { Actions } from './Actions';

const Navbar = () => {
    const { productsData, productDispatch } = useContext(ProductContext);

    const showRedDot = () => {
        return(
            <div className="red-dot"></div>
        )
    }

    const changeNav = (value) => {
        productDispatch({type: Actions.GET_CURRENT_PATH, payload: value})
    }

    console.log(productsData.currentPath);
    return(
        <Paper style={{width: "100%", marginTop: "-25px", background: "linear-gradient(40deg, rgba(217,155,48,1) 0%, rgba(255,204,64,1) 79%, rgba(221,221,221,1) 100%)"}}>
            <Link to="/">
            <h1 style={{color: "grey", textDecoration: "none"}}><GiGuitarBassHead style={{height: 50, width: 50, color: "black"}}/>Music Leftovers</h1>
            </Link>
            
            {/* <ul className="nav-bar">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul> */}
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
            {/* <div>
            <span style={{border: "1px solid black"}}><Link to="/cart">Cart</Link></span>
            {productsData.myCart !== "" && productsData.myCart.length >= 1 ? showRedDot() : "" }
            </div> */}
        </Paper>
    )
}

export default Navbar;