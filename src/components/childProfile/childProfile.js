import React, { Component } from "react";


class ChildProfile extends Component {

    state = {
        child: []
    };
    
    async componentDidMount() {
        const response = await fetch("/childprofile");
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
                <h5 key={child.name}>{child.name}</h5>
                )}
            </body>
        </div>
    }

}

export default ChildProfile;