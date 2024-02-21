/*import React, { Component } from "react";


class Child extends Component {

    state = {
        children: []
    };
    
    async componentDidMount() {
        const response = await fetch("/child");
        const body = await response.json();
        this.setState({children: body});
    }


    render(){
        const {children} = this.state;

        return(<div>
        
                <h2>My Child</h2>
                {children.map(child => 
                <h5 key={child.id}>{child.childName}</h5>
                )}
        </div>
        )
    }

}


export default Child;

*/