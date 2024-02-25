import React, { useState } from "react";
import { Container, Label, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";



function ProfileInput (){
    const [createdChildId, setCreatedChildId] = useState(null);
    const [childName, setChildName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');    

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Form submitted');

        const response = await fetch('/child', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({childName, dateOfBirth})
        });

        if(response.ok){
            const child = await response.json();
            setCreatedChildId(child.id);
            window.location.href = '/'
        } else {
            console.error('Failed to add child profile');
        }
    };

    return (
        <div>
            <Container>
                <h2>Add Child Profile</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="childName">Child Name:</Label>
                        <Input type="text" id="childName" value={childName} onChange={(e) => setChildName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateOfBirth">Date of Birth:</Label>
                        <Input type="text" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="MM/dd/yyyy"/>
                    </FormGroup>
                        <Button type="submit" color="primary">Submit</Button>
                        <Link to="/" color="secondary">Cancel</Link>
                </Form>
            </Container>
        </div>
    );


}

export default ProfileInput;