import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <span>Logo</span>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/vsts">Virtual Instruments</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <span><Link to="/cart">Cart</Link></span>
        </div>
    )
}

export default Navbar;