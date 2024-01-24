import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';


class ActivityList extends Component {
  state = {
    activities: []
  };

  async componentDidMount() {
    const response = await fetch("/api/activities");
    const body = await response.json();
    this.setState({activities: body});
  }

  async remove(id) {
    await fetch(`/api/activities/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(() => {
        let updatedActivities = [...this.state.activities].filter(i => i.id !== id);
        this.setState({activities: updatedActivities});
    });
}

  render() {
    const {activities} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h2>Activities</h2>
                    <table>
                      <tr>
                        <th>Name of Activity</th>
                        <th>Child's Name</th>
                        <th>Date of Activity</th>
                        <th>Type of Activity</th>
                        <th>Duration of Activity</th>
                        <th>Mood of Child</th>
                        <th>Action</th>
                       </tr>
                       
                        {activities.map(activity =>
                          <tr key={activity.id}>
                            <td>{activity.name}</td>
                            <td>{activity.child}</td>
                            <td>{activity.month}/{activity.day}/{activity.year}</td>
                            <td>{activity.typeOfActivity}</td>
                            <td>{activity.durationOfActivity}</td>
                            <td>{activity.mood}</td>
                            <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary" tag={Link} to={"/api/activities/" + activity.id}>Edit</Button>
                                <Button size="sm" color="danger" onClick={() => this.remove(activity.id)}>Delete</Button>
                            </ButtonGroup>
                            </td>
                       </tr>
                        )}
                    </table>
                  </div>
          </header>
        </div>
    );
  }
}
export default ActivityList;


