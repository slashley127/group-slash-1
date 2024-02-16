import React from "react";

import './Navbar.css';
import { ReactComponent as Brand } from './icons/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class ="navbar">
            <div class = "container">

                {/* This is just a placeholder logo from logoipsumdolor.com */}
                <div class="logo">
                    <Brand />
                </div>

                {/* Navigation links */}
            <div>
                <ul class="nav-links">
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/profile" class="nav-link">Profile</Link>
                    </li>
                    <li>
                        <Link to ="/child" class="nav-link">Child</Link>
                    </li>
                    <li>
                        <Link to ="/activities" class="nav-link">Activities List</Link>
                    </li>
                    <li>
                        <Link to ="/activities/new" class="nav-link">Add Activity</Link>
                    </li>

                    <li>
                        <Link to ="/analyzer" class="nav-link">Analyzer</Link>
                    </li>
                    <li>
                        <Link to ="/about" class="nav-link">About</Link>
                    </li>
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