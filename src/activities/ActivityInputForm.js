import {React, Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';

class ActivityEdit extends Component {

    emptyActivity = {
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
            activity: this.emptyActivity
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const anActivity  = await (await fetch(`/api/activities/${this.props.match.params.id}`)).json();
            this.setState({activity: anActivity});
        }
    }

         handleChange(e) {
            const target = e.target;
            const value = target.value;
            const name = target.name;
            let activity = {...this.state.activity};
            activity[name] = value;
            this.setState({activity});
        }
    
        async handleSubmit(e) {
            e.preventDefault();
            const {activity} = this.state;
            await fetch('/api/activities' + (activity.id ? '/' + activity.id : ''), {
                method: (activity.id) ? 'PUT' : 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(activity),
            });
            Swal.fire({
                title: 'Activity Logged',
                text: 'You successfully logged and activity!',
                icon: 'check',
                confirmButtonText: 'Awesome!',
            }).then((result) => {
                this.props.history.push('/api/activities');
                return true;
            
                });
        }
        
    

            render() {
                const {activity} = this.state;
                const title = <h2>{activity.id ? 'Edit Activity' : 'Add Activity'}</h2>;
            
                return <div>
                    <Container>
                        {title}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" value={activity.name || ''}
                                       onChange={this.handleChange} autoComplete="name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="child">Name of Child</Label>
                                <Input type="text" name="child" id="child" value={activity.email || ''}
                                       onChange={this.handleChange} autoComplete="child"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="month">Month</Label>
                                <Input type="text" name="month" id="month" value={activity.month || ''}
                                       onChange={this.handleChange} autoComplete="month"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="day">Day</Label>
                                <Input type="text" name="day" id="day" value={activity.day || ''}
                                       onChange={this.handleChange} autoComplete="day"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="year">Year</Label>
                                <Input type="text" name="year" id="year" value={activity.year || ''}
                                       onChange={this.handleChange} autoComplete="year"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="typeOfActivity">Type of Activity</Label>
                                <Input type="text" name="typeOfActivity" id="typeOfActivity" value={activity.typeOfActivity || ''}
                                       onChange={this.handleChange} autoComplete="typeOfActivity"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="durationOfActivity">Duration of Activity </Label>
                                <Input type="text" name="durationOfActivity" id="durationOfActivity" value={activity.durationOfActivity || ''}
                                       onChange={this.handleChange} autoComplete="durationOfActivity"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="mood">Mood</Label>
                                <Input type="text" name="mood" id="mood" value={activity.mood || ''}
                                       onChange={this.handleChange} autoComplete="mood"/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">Save</Button>{' '}
                            </FormGroup>
                        </Form>
                    </Container>
                </div>
            }
        }
    
    export default ActivityEdit;



