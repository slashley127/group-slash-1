import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class EmergencyContact extends Component {

    constructor(props) {
        super(props);
        this.state = {emergencyContacts: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/emergencyContacts')
            .then(response => response.json())
            .then(data => this.setState({clients: data}));
    }
    async remove(id) {
        await fetch(`/emergencyContacts/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedEmergencyContacts = [...this.state.clients].filter(i => i.id !== id);
            this.setState({emergencyContacts: updatedEmergencyContacts});
        });
    }

    render() {
        const {emergencyContacts} = this.state;

        const emergencyContactBody = emergencyContacts.map(emergencyContact => {
            return <tr key={emergencyContact.id}>
                <td>{emergencyContact.firstName}</td>
                <td>{emergencyContact.lastName}</td>
                <td>{emergencyContact.phoneNumber}</td>
                <td>{emergencyContact.relationship}</td>
                <td>{emergencyContact.workplace}</td>
                <td>{emergencyContact.age}</td>
                <td>{emergencyContact.address}</td>
                <td>{emergencyContact.city}</td>
                <td>{emergencyContact.state}</td>
                <td>{emergencyContact.zip}</td>
                <td>{emergencyContact.notes}</td>

                <td>
                    <ButtonGroup>
                        <Button tag={Link} to="/emergencyContacts/new">Add Emergency Contact</Button>
                        <Button size="sm" color="primary" tag={Link} to={"/emergencyContacts/" + emergencyContact.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(emergencyContact.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
    });

        return (
            <div>
                <Container>
                    <div>
                        <Button color="success" tag={Link} to="/emergencyContacts/new">Add Emergency Contact</Button>
                    </div>
                    <h2>Emergency Contacts</h2>

                    <Table>
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Relationship</th>
                            <th>Workplace</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Notes</th>
                        </tr>
                        </thead>

                        <tbody>
                        {emergencyContactBody}
                        </tbody>

                        
                    </Table>

                </Container>
            </div>
        );
    }
}

export default EmergencyContact;