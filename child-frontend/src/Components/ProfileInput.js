import React, { Component, useState } from "react";
import { Container, Label, Form, FormGroup, Input, Button, FormText } from "reactstrap";
import { useParams } from "react-router-dom";
import goNavigate from "./Navigate";



function ProfileInput (){
    const [childName, setChildName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [profilePictureUrl, setProfilePictureUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setChildName('');
        setDateOfBirth('');
        setProfilePictureUrl('');
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
                        <Input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="profilePictureUrl">Profile Picture:</Label>
                        <Input type="text" id="profilePictureUrl" value={profilePictureUrl} onChange={(e) => setProfilePictureUrl(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </Container>
        </div>
    )


}

export default ProfileInput;