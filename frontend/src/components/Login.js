import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Login = ({history}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[error, setError] = useState('');

    const handleLogin = async() => {
        try{
            const response = await fetch('/user/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            });

            if(!response.ok){
                throw new Error('Login failed');
            }

            history.push('/profile');
        }catch (error){
            setError('Login failed. Please try again');
        }
    };

    return(
        <div>
            <Container>
                <h2>Login</h2>
                {error && <Alert color="danger">{error}</Alert>}
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <Button color="primary" onClick={handleLogin}>Login</Button>
                </Form>
                <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </Container>
        </div>
    )
}

export default Login;