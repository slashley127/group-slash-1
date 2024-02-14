import React, { Component } from "react";
import { Button } from "reactstrap";


class Profile extends Component {

    state = {
        child: []
    };


    async componentDidMount() {
        const response = await fetch("/child");
        const body = await response.json();
        this.setState({child: body});
    }


    render(){
        const {child} = this.state;

        return<div>
            <header>
                <h2>My Child</h2>
            </header>
            <body>
                {child.map(child => 
                <h5 key={child.id}>{child.childName}</h5>
                )}
            </body>
            <Button color='primary' type='submit'>Edit</Button>
        </div>
    }

}

export default Profile;