import React from "react";

import './Navbar.css';
import { ReactComponent as Brand } from './icons/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className ="navbar">
            <div className = "container">

                {/* This is just a placeholder logo from logoipsumdolor.com */}
                <div className="logo">
                    <Brand />
                </div>

                {/* Navigation links */}
            <div>
                <ul className="nav-links">
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li>
                        <Link to ="/child" className="nav-link">Child</Link>
                    </li>
                    <li>
                        <Link to ="/activities" className="nav-link">Activities</Link>
                    </li>
                    <li>
                        <Link to ="/analyzer" className="nav-link">Analyzer</Link>
                    </li>
                    <li>
                        <Link to ="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    );

    
};

export default Navbar