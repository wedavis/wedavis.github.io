import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false); 
    return(
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        William Davis
                    </Link>
                    <div className = 'menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />  }
                    </div> 
                    <nav className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                         </li>    
                    </nav>
                </div>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;