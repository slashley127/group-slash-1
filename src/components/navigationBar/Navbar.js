import React from "react";
import { useState } from "react";
import './Navbar.css';
import { ReactComponent as Brand } from './icons/logo.svg';
import { Link } from 'react-router-dom';



const Navbar = () => {

    //For Dropdown menu on Activities
    const [click, setClick] = useState(false);
    const setDropdown = useState(false);
  
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

                    <li class = "nav-item dropdown">
                        <Link class='nav-links dropdown-toggle' href="/activities" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={closeMobileMenu}>
                            Activities
                        </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <ul>
                                <Link to="/activities" class="dropdown-item">Activities</Link>
                                <Link to="/activities/new" class="dropdown-item">Add Activity</Link>
                                <Link to="/enrichment/random" class="dropdown-item">Activity Generator</Link>
                                </ul>
                            </div>
                    </li>

                    <li class = "nav-item">
                        <Link to ="/about" class="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    
    );
};

export default Navbar