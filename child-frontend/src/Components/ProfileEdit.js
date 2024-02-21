import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/dist";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function ProfileEdit () {
    const {id} = useParams();
    const [childName, setChildName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [profilePictureUrl, setProfilePictureUrl] = useState('');

    useEffect(() => {
        const fetchChild = async () => {
            const response = await fetch(`/child/${id}`)
            if (response.ok){
                const data = await response.json();
                setChildName(data.childName);
                setDateOfBirth(data.dateOfBirth);
                setProfilePictureUrl(data.profilePictureUrl);
            } else {
                console.error(`Failed to fetch child profile with id ${id}`);
            }
        };
        fetchChild();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/child/${id}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({childName, dateOfBirth, profilePictureUrl}),
        });
        if(response.ok){
            window.location.href = '/profile/:id';
        } else {
            console.error(`Failed to update child profile with id ${id}`);
        }
    };

    return(
        <div>
            <Container>
                <h2>Update Child Profile</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="childName">Child Name:</Label>
                        <Input type="text" id="childName" value={childName} onChange={(e) => setChildName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateOfBirth">Date of Birth:</Label>
                        <Input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="profilePictureUrl">Profile Picture:</Label>
                        <Input type="text" id="profilePictureUrl" value={profilePictureUrl} onChange={(e) => setProfilePictureUrl(e.target.value)}/>
                    </FormGroup>
                    <Button type='submit' color='primary'>Update</Button>
                    <Link to='/profile/:id' color='secondary'>Cancel</Link>
                </Form>
            </Container>
        </div>
    )
}

export default ProfileEdit;