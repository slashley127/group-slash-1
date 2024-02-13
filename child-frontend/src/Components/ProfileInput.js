import React, { Component } from "react";
import { Container, Label, Form, FormGroup, Input, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import goNavigate from "./Navigate";


function withParams(Component) {
    return props => 
    <Component {...props} params={useParams()} />;
}

class ProfileInput extends Component{

    emptyItem = {
        name:"",
        birthday:""
    };

    constructor(props) {
        super(props);
        this.state={item: this.emptyItem};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    async componentDidMount() {
        const {id} = this.props.params;
        if (id !== 'new') {
            const child = await(await fetch(`/child/${id}`)).json();
            this.setState({item: child});
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
            await fetch('/child', {
                method: "POST", 
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(item)
            });
        } else {
            await fetch(`/child/${item.id}`, {
                method: "PUT",
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(item)
            });
        }
        this.props.navigation("/profile");
    }

    render() {
        const {item} = this.state;
        const title = <h2>Child Profile</h2>;

        return<div>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                        onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="birthday">Date Of Birth</Label>
                        <Input type="text" name="birthday" id="birthday" value={item.birthday || ''}
                        onChange={this.handleChange} placeholder="MM/DD/YYYY"/> 
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Submit</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }

}

export default withParams(goNavigate(ProfileInput));