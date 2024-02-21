import React, { Component, useState } from 'react';
import { useParams, useNavigate, withRouter, Link } from 'react-router-dom';
import { Container, Label, Form, FormGroup, Input, Button, Alert } from 'reactstrap';
import goNavigate from './Navigate';



const SignUp = ({history}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const[error, setError] = useState('');


    const handleSubmit = async () => {
        try {
            const response = await fetch('/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, email, password}),
            });
            if(!response.ok) {
                throw new Error('Sign up failed');
            }

            setUsername('');
            setPassword('');
            setEmail('');
            setError('');

            history.push('/profile');
        } catch (error){
            setError('Sign up failed. Please try again.');
        }
    }

        return (<div>
            <Container>
                <h2>Sign Up</h2>
                {error && <Alert color="danger">{error}</Alert>}
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color='primary' onClick={handleSubmit}>Submit</Button>
                    </FormGroup>
                </Form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </Container>
        </div>
        );
    }
export default SignUp;