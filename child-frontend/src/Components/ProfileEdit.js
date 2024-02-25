import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const ProfileEdit = () => {
    const {id} = useParams();
    const [child, setChild] = useState(null);
    const [error, setError] = useState(null);
    const [editedChild, setEditedChild] = useState({
        childName: '',
        dateOfBirth: ''
    })

    useEffect(() => {
        const fetchChild = async () => {
            try {
                const response = await fetch(`/child/${id}`);
                if(response.ok){
                    const data = await response.json();
                    setChild(data);
                    setEditedChild({
                        childName: data.childName,
                        dateOfBirth: data.dateOfBirth
                    });
                } else {
                    setError(`Failed to fetch child profile with id ${id}`);
                }
            }catch (error){
                setError('Failed');
            }
        };
        fetchChild();
    }, [id]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditedChild({...editedChild, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/child/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editedChild)
            });
            if(response.ok){
                window.location.href= `/child/${id}`;
            } else {
                setError('Faile to edit child profile');
            }
        } catch (error) {
            setError('Failed to edit child profile');
        }
    };

    if (error){
        return <div>Error: {error}</div>
    }

    if(!child) {
        return <div>Loading...</div>
    }

    return(
        <div>
            <Container>
                <h2>Edit Child Profile</h2>
                <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="childName">Child Name:</Label>
                    <Input type="text" id="childName" name="childName" value={editedChild.childName} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="dateOfBirth">Date of Birth:</Label>
                    <Input type="text" id="dateOfBirth" name="dateOfBirth" value={editedChild.dateOfBirth} onChange={handleChange} placeholder="MM/dd/yyyy"/>
                </FormGroup>
                <Button type='submit' color='primary'>Save Changes</Button>
                <Link to='/viewAll' color='secondary'>Cancel</Link>
                </Form>
            </Container>
        </div>
    )
}

export default ProfileEdit;