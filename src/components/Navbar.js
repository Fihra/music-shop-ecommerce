import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {SiAudiomack} from 'react-icons/si';
import { ProductContext } from './ProductContext'; 
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs, Tab} from '@material-ui/core';

const Navbar = () => {
    const [value, setValue] = useState();

    const { productsData } = useContext(ProductContext);

    const showRedDot = () => {
        return(
            <div className="red-dot"></div>
        )
    }

    return(
        <Paper>
            <SiAudiomack/>
            {/* <ul className="nav-bar">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul> */}
            <Tabs
                value={value}
                onChange={() => setValue(value)}
                centered
            >
                <Tab label="About" to="/about" component={Link} value={0}/>
                <Tab label="Products" to="/products" component={Link} value={1}/>
                <Tab label="Contact" to="/contact" component={Link}  value={2}/>
                <Tab label="Cart" to="/cart" component={Link}  value={3}/>
            </Tabs>
            {/* <div>
            <span style={{border: "1px solid black"}}><Link to="/cart">Cart</Link></span>
            {productsData.myCart !== "" && productsData.myCart.length >= 1 ? showRedDot() : "" }
            </div> */}
        </Paper>
    )
}

export default Navbar;