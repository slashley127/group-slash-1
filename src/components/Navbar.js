import React from "react";
import { useState } from "react";
import './Navbar.css';
import { ReactComponent as Brand } from './icons/logo.svg';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';



const Navbar = () => {

    //For Dropdown menu on Activities
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    // Changes Menu style based on width of browswer window for mobile
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };





    return (
        <nav class ="navbar">
            <div class = "container">
                

                {/* Logo from Figma Design Proposal */}
                {/* <div class="logo">
                    <Brand />
                </div> */}

                {/* Hamburger Menu style icon from fontawesome.come for smaller window or mobile */}
                <div class = "menu-icon" onClick = {handleClick}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>

                {/* Navigation links */}
            <div>
                <ul class= {click ? 'nav-menu active' : 'nav-menu'} >
                    <li class = "nav-item">
                        <Link to ="/" class="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li class = "nav-item">
                        <Link to ="/profile" class="nav-links" onClick={closeMobileMenu}>
                            My Profile
                        </Link>
                    </li>

                    <li class = "nav-item">
                        <Link to ="/child" class="nav-links" onClick={closeMobileMenu}>
                            My Child
                        </Link>
                    </li>

                    <li class = "nav-item" onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}>
                        <Link to ="/activities" class="nav-links" onClick={closeMobileMenu}>
                            Activities <i className='fas fa-caret-down' /> 
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>


                    <li class = "nav-item">
                        <Link to ="/about" class="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>

                    <li>
                        <Link to ="/enrichment/filtered" class="nav-link">Activity Suggestions</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    
    );
};

export default Navbar