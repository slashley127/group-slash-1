import React, { Component } from 'react';
import { Link, useParams, withRouter, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import withNavigateHook from './NavigateHook';
import "../pages.css"

function withParams(Component) {
  return props => 

  <Component {...props} params={useParams()} />;

  
}

class ActivityEdit extends React.Component {

    emptyInfo = {
        nameOfActivity:"",
        date:"",
        child: "",
        durationOfActivity:"",
        typeOfActivity:"",
        mood: ""

    }
    constructor(props) {
        super(props);
        this.state = {
            info: this.emptyInfo,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async componentDidMount() {
        const { id } = this.props.params;
        if (id !== 'new') {
            const activity = await (await fetch(`/activities/${id}`)).json();
            this.setState({info: activity});
        }
    }
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let info = {...this.state.info};
        if (name === "date") {
            const formattedDate = new Date(value).toISOString().split('T')[0];
            info[name] = formattedDate;
        }else{
        info[name] = value;
        }
        this.setState({ info });
    
}
    
        async handleSubmit(e) {
            e.preventDefault();
            const {info} = this.state;
            if (!info.id) {
                try {

               const response =  await fetch ('/activities', {
                    method: "POST",
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(info)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
                } catch (error) {
                  console.error('Error during POST request:', error);
            } 
        }       else {
                await fetch(`/activities/${info.id}`, {
                    method: "PUT",
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(info)
                });
            }
            this.props.navigation("/activities");
        }

            render() {
                const {info} = this.state;
                const title = <h2>{info.id ? 'Edit Activity' : 'Add Activity'}</h2>;
            
                return <div className= "body-container">
                    <Container className="activity-input-container">
                        <h2 className ="header-add-activity">Add Activity</h2>
                        <Form onSubmit={this.handleSubmit} className="activity-form">
                            <FormGroup>
                                <Label for="nameOfActivity">Name of Activity</Label>
                                <Input type="text" name="nameOfActivity" id="nameOfActivity" value={info.nameOfActivity || ''}
                                       onChange={this.handleChange} autoComplete="nameOfActivity"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="child">Name of Child</Label>
                                <Input type="text" name="child" id="child" value={info.child || ''}
                                       onChange={this.handleChange} autoComplete="child"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Date</Label>
                                <Input type="date" name="date" id="date" value={info.date || ''}
                                       onChange={this.handleChange} autoComplete="date"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="durationOfActivity">Duration of Activity in Minutes </Label>
                                <Input type="text" name="durationOfActivity" id="durationOfActivity" value={info.durationOfActivity || ''}
                                       onChange={this.handleChange} autoComplete="durationOfActivity"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="typeOfActivity">Type of Activity</Label>
                                <select name= "typeOfActivity" id= "typeOfActivity" value={info.typeOfActivity || ''}
                                       onChange={this.handleChange} autoComplete="typeOfActivity">
                                    <option value="screen time">screen time</option>
                                    <option value="educational">educational</option>
                                    <option value="exercise">exercise</option>
                                    <option value="social">social</option>
                                </select>
                            </FormGroup>
                            <FormGroup>
                                <Label for="mood">Mood</Label>
                                <Input type="text" name="mood" id="mood" value={info.mood || ''}
                                       onChange={this.handleChange} autoComplete="mood"/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                                <Button color="secondary" tag={Link} to="/activities">Cancel</Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </div>
            }
    
    }
    export default withParams(withNavigateHook(ActivityEdit));



