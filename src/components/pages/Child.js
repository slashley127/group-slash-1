import React, { Component } from 'react';
// import '../App.css';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';


class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {child: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/child')
            .then(response => response.json())
            .then(data => this.setState({child: data}));
    }
    async remove(id) {
        await fetch(`/childprofile/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedChild = [...this.state.child].filter(i => i.id !== id);
            this.setState({child: updatedChild});
        });
    }

    render() {
        const {child} = this.state;

        const childBody = child.map(child => {
            return <tr key={child.id}>
                <td>{child.Name}</td>
                <td>{child.Birthday}</td>

                <td>
                    <ButtonGroup>
                        <Button tag={Link} to="/childprofile/new
                        +">Add New Child</Button>
                        <Button size="sm" color="primary" tag={Link} to={"/childprofile/" + child.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(child.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
    });
        return (
            <div>
                <h1>My Child</h1>

                <div>
                <Container>
                    <h2>Choose Child Profile</h2>
                    <Table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birthday</th>
                        </tr>
                        </thead>

                        <tbody>
                        {childBody}
                        </tbody>

                        
                    </Table>

                </Container>
            </div>

                <h2>Add New Child</h2>
                <a href="/childprofile/new"><button>New Child</button></a>


                <a href="/emergencycontacts"><button>View Emergency Contacts</button></a>
                <a href="/emergencycontacts/new"><button>Add Emergency Contacts</button></a>
            </div>
        );
    }
}

export default Child;