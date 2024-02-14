import React, { Component } from 'react';
import { useParams, useNavigate, withRouter } from 'react-router-dom';
import { Container, Label, Form, FormGroup, Input, Button } from 'reactstrap';
import goNavigate from './Navigate';


function withParams(Component) {
    return props =>

    <Component {...props} params={useParams()} />;
}


class SignUp extends Component {

    emptyItem = {
        username:"",
        email:"",
        password:""
    };

    constructor(props){
        super(props);
        this.state={item: this.emptyItem};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    async componentDidMount() {
        const {id} = this.props.params;
        if (id !== 'new') {
            const user = await (await fetch(`/newUser/${id}`)).json();
            this.setState({item: user});
        }
    };


    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    };

    async handleSubmit(e) {
        e.preventDefault();
        const {item} = this.state;
        if (!item.id) {
            await fetch ('/newUser', {
                method: "POST",
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(item)
            });
        } else {
            await fetch(`/newUser/${item.id}`, {
                method: "PUT",
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(item)
            });
        }
        this.props.navigation("/welcome");
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit User' : 'Add User'} </h2>;

        return <div>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" value={item.username || ''}
                        onChange={this.handleChange} autoComplete="username"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                        onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="text" name="password" id="password" value={item.password || ''}
                        onChange={this.handleChange} autoComplete="password"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color='primary' type='submit'>Submit</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    };
}
export default withParams(goNavigate(SignUp));