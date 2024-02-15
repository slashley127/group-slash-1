import React from "react";

import './HomeNav.css';

import { Link } from 'react-router-dom';


const HomeNav = () => {
    return (
        <div className = "home-nav-container">
            <div className = "view-activities-rectangle">
                <Link to ="/activities" class="view-activities-link">View Activities</Link>
            </div>
            <div className = "add-activities-rectangle">
                <Link to ="/activities/new" class="add-activities-link">Add Activities</Link>
            </div>
            <div className = "suggest-activities-rectangle">
                <Link to ='/enrichment/random' class="suggest-activities-link">Suggest Activities</Link>
            </div>
            <div className = "my-child-rectangle">
                <Link to ="/child" class="my-child-link">My Child</Link>
            </div>
        </div>
    )

}

export default HomeNav;