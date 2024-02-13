import React, { Component } from "react";
import { Button, Container, FormGroup, Form } from "reactstrap";
import goNavigate from "./Navigate";
import { useParams } from "react-router-dom";


function withParams(Component) {
    return props => 
    <Component {...props} params={useParams()} />;
}


class Profile extends Component {

    state = {
        child: []
    }

    constructor(props) {
        super(props);
        this.state={item: this.emptyItem};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
        const response = await fetch("/child");
        const body = await response.json();
        this.setState({child: body});
    }


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
        this.props.navigation("/edit");
    }


    render(){
        const {child} = this.state;

        return<div>
            <Container>
                <header>
                    <h2>My Child</h2>
                </header>
                <body>
                    {child.map(child => 
                    <h5 key={child.id}>{child.childName}</h5>
                        )}
                </body>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Button color="primary" type="submit">Edit Profile</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }

}

export default withParams(goNavigate(Profile));