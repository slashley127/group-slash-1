import React, { Component } from 'react';
import { Link, useParams, withRouter, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Swal from 'sweetalert2';

import withNavigateHook from './NavigateHook';




function withParams(Component) {
  return props => 

  <Component {...props} params={useParams()} />;

  
}




class ActivityEdit extends React.Component {


    emptyInfo = {
        name:"",
        child:"",
        month:"",
        day:"",
        year:"",
        typeOfActivity:"",
        durationOfActivity:"",
        mood:""

    }
    constructor(props) {
        super(props);
        this.state = {
            info: this.emptyInfo
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
            info[name] = value;
            this.setState({info});
        }
    
        async handleSubmit(e) {
            e.preventDefault();
            const {info} = this.state;

            if (!info.id) {
                await fetch ('/api/activities', {
                    method: "POST",
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(info)
                });
            } else {
                await fetch(`/api/activities/${info.id}`, {
                    method: "PUT",
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(info)
                });
            }
            Swal.fire({
                title: 'Activity Logged',
                text: 'You successfully logged and activity!',
                icon: 'success',
                confirmButtonText: 'Awesome!',
            }).then((result) => {
                this.props.navigation("/activities");
                return true;
            
                });
        }
        
    

            render() {
                const {info} = this.state;
                const title = <h2>{info.id ? 'Edit Activity' : 'Add Activity'}</h2>;
            
                return <div>
                    <Container>
                        {title}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" value={info.name || ''}
                                       onChange={this.handleChange} autoComplete="name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="child">Name of Child</Label>
                                <Input type="text" name="child" id="child" value={info.child || ''}
                                       onChange={this.handleChange} autoComplete="child"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="month">Month</Label>
                                <Input type="text" name="month" id="month" value={info.month || ''}
                                       onChange={this.handleChange} autoComplete="month"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="day">Day</Label>
                                <Input type="text" name="day" id="day" value={info.day || ''}
                                       onChange={this.handleChange} autoComplete="day"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="year">Year</Label>
                                <Input type="text" name="year" id="year" value={info.year || ''}
                                       onChange={this.handleChange} autoComplete="year"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="typeOfActivity">Type of Activity</Label>
                                <Input type="text" name="typeOfActivity" id="typeOfActivity" value={info.typeOfActivity || ''}
                                       onChange={this.handleChange} autoComplete="typeOfActivity"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="durationOfActivity">Duration of Activity </Label>
                                <Input type="text" name="durationOfActivity" id="durationOfActivity" value={info.durationOfActivity || ''}
                                       onChange={this.handleChange} autoComplete="durationOfActivity"/>
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



