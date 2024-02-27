import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Label, Form, Input, Button, FormGroup } from 'reactstrap';



function SignUp() {
    const [createdUserId, setCreatedUserId] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pwHash, setPwHash] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Form submitted');

        const response = await fetch('/user', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, pwHash})
        });

        if(response.ok){
            const user = await response.json();
            console.log("Sign-up response:", user);
            setCreatedUserId(user.id);
            window.location.href = `/home/${user.id}`
        } else {
            console.error('Failed to add user');
        }
    };
    
    return (
        <div>
            <Container>
                <h2>Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pwHash">Password:</Label>
                        <Input type='password' id='pwHash' value={pwHash} onChange={(e) => setPwHash(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
                <p>Already have an account? <Link to="/">Login</Link></p>
            </Container>
        </div>
    )

}
export default SignUp;