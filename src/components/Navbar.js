import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {SiAudiomack} from 'react-icons/si';
import { ProductContext } from './ProductContext'; 

const Navbar = () => {
    const { productsData } = useContext(ProductContext);

    const showRedDot = () => {
        return(
            <div className="red-dot"></div>
        )
    }

    return(
        <div>
            <SiAudiomack/>
            <ul className="nav-bar">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div>
            <span style={{border: "1px solid black"}}><Link to="/cart">Cart</Link></span>
            {productsData.myCart !== "" && productsData.myCart.length >= 1 ? showRedDot() : "" }
            </div>
        </div>
    )
}

export default Navbar;