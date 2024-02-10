
import React, { Component } from 'react';
// import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';


class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to KidVenture!</h1>
                <Container fluid>
                    <Button color="link"><Link to="/activities">Activities</Link></Button>
                </Container>
            </div>
        );
    }
}
export default Home;