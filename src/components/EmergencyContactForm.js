import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class EmergencyContactForm extends Component {

    emptyItem = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        relationship: '',
        workplace: '',
        age: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        notes: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const emergencyContact = await (await fetch(`/emergencyContacts/${this.props.match.params.id}`)).json();
            this.setState({item: emergencyContact});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/emergencyContacts' + (item.id ? '/' + item.id : ''), {
        method: (item.id) ? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    });
    this.props.history.push('/emergencyContacts');
}


    render () {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Emergency Contact' : 'Add Emergency Contact'}</h2>;


        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                    {/* Required fields */}
                        <FormGroup>
                            <Label htmlFor="firstName">First name:</Label>
                                <Input type="text" name="firstName" id="firstName" placeholder="Required"
                                value ={item.firstName || ''}
                                onChange = {this.handleChange} autoComplete="firstName"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastName">Last name:</Label>
                                <Input type="text" name="lastName" id="lastName" placeholder="Required"
                                value ={item.lastName || ''}
                                onChange = {this.handleChange} autoComplete="lastName"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="phoneNumber">Phone Number:</Label>
                                <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Required"
                                value ={item.phoneNumber || ''}
                                onChange = {this.handleChange} autoComplete="phoneNumber"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="relationship">Relationship: </Label>
                                <Input type="text" name="relationship" id="relationship" placeholder="Required"
                                value ={item.relationship || ''}
                                onChange = {this.handleChange} autoComplete="relationship"/>
                        </FormGroup>




                    {/* Optional fields */}
                        <FormGroup>
                            <Label htmlFor="workplace">Workplace:</Label>
                                <Input type="text" name="workplace" id="workplace" placeholder="Optional"
                                value ={item.workplace || ''}
                                onChange = {this.handleChange} autoComplete="workplace"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="age">Age:</Label>
                                <Input type="text" name="age" id="age" placeholder="Optional"
                                value ={item.age || ''}
                                onChange = {this.handleChange} autoComplete="age"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="address">Address: </Label>
                                <Input type="text" name="address" id="address" placeholder="Optional"
                                value ={item.address || ''}
                                onChange = {this.handleChange} autoComplete="address"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="city">City: </Label>
                                <Input type="text" name="city" id="city" placeholder="Optional"
                                value ={item.city || ''}
                                onChange = {this.handleChange} autoComplete="city"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="state">State: </Label>
                                <Input type="text" name="state" placeholder="Optional"
                                value ={item.state || ''}
                                onChange = {this.handleChange} autoComplete="state"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="zip">Zip: </Label>
                                <Input type="text" name="zip" placeholder="Optional"
                                value ={item.zip || ''}
                                onChange = {this.handleChange} autoComplete="zip"/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="notes">Notes: </Label>
                                <Input type="textarea" name="notes"
                                    value ={item.notes || ''}
                                    onChange = {this.handleChange} autoComplete="notes"/>
                        </FormGroup>
                        
                        <FormGroup>
                            <Button type="submit">Submit</Button>
                            <Button tag={Link} to="/child">Cancel</Button>
                        </FormGroup>

                    </Form>
                </Container>
             </div>
    );

    }
}

    export default withRouter (EmergencyContactForm);
