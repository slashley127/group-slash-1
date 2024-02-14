import React, { Component } from "react";
import { Container, Label, Form, FormGroup, Input, Button, FormText } from "reactstrap";
import { useParams } from "react-router-dom";
import goNavigate from "./Navigate";


function withParams(Component) {
    return props => 
    <Component {...props} params={useParams()} />;
}

class ProfileInput extends Component{

    emptyItem = {
        childPicture:"",
        childName:"",
        dateOfBirth:""
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
                        <Label for="childPicture">Upload Child Photo</Label>
                        <Input type="file" nname='file' id="childPicture" 
                        onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="childName">Name</Label>
                        <Input type="text" name="childName" id="childName" value={item.childName || ''}
                        onChange={this.handleChange} autoComplete="childName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateOfBirth">Date Of Birth</Label>
                        <Input type="text" name="dateOfBirth" id="dateOfBirth" value={item.dateOfBirth || ''}
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