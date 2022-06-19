import React from "react";
import {Link} from "react-router-dom";
import '../style/navbar.module.scss';

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/visualiser'>Visualiser</Link>
                </li>
                <li>
                    <Link to='/support'>Support Us</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>

        </nav>
    )
}