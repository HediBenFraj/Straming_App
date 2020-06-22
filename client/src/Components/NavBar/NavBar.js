import React from 'react';
import {  Link} from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
import './NavBar.css'


const NavBar =()=> {
    return(


        
            <header>
                <img className="logo" src="logp.png" alt="logo"/>
                <nav>
                    <ul className="nav-links">
                        <li> <Link to="/" className="item ">Hedi Streams</Link></li>
                        <li>   <Link to="/" className="item ">All Streams</Link></li>
                        <li> <GoogleAuth/> </li>
                    </ul>
                    
                </nav>
            </header>
        
    )
}


export default NavBar;