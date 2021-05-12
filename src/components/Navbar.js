import React from 'react';
import { Link } from 'react-router-dom';
import {SiAudiomack} from 'react-icons/si'

const Navbar = () => {
    return(
        <div>
            <SiAudiomack/>
            <ul className="nav-bar">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/vsts">Virtual Instruments</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <span style={{border: "1px solid black"}}><Link to="/cart">Cart</Link></span>
        </div>
    )
}

export default Navbar;