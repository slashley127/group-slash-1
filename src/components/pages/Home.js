
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import './pages.css';
import HomeNav from "../HomeNav"


class Home extends Component {
    render() {
        return (
            <div>
                <div className="welcome-back-text">
                    <h1>Welcome back!</h1>
                </div>
                <HomeNav/>
            </div>
        );
    }
}
export default Home;