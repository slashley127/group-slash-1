import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function Login(){
    const [email, setEmail] = useState('');
    const [pwHash, setPwHash] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('/user/authenticate', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, pwHash})
        });

        if(response.ok){
            const user = await response.json();
            console.log('Login response:', user);
            if(user.status === 'success'){
                window.location.href = `/home/${user.id}`;
            } else {
                console.error('Login failed');
            }
        } else {
            console.error("Failed to log in");
        }
    };

    return(
        <div>
            <Container>
                <h2>Login</h2>
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pwHash">Password:</Label>
                        <Input type='password' id='pwHash' value={pwHash} onChange={(e) => setPwHash(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" color="primary">Login</Button>
                </Form>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </Container>
        </div>
    )

}
 export default Login;