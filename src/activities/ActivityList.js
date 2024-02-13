import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';


class ActivityList extends Component {
  state = {
    activities: []
  };

  async componentDidMount() {
    const response = await fetch("/activities");
    const body = await response.json();
    this.setState({ activities: body });
  }

  showGoalReachedAlert(activities) {
    for (let activity of activities) {

      return true; // TODO add in if statements for measurements

    }

  }

  async remove(id) {
    await fetch(`/activities/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(() => {
      let updatedActivities = [...this.state.activities].filter(i => i.id !== id);
      this.setState({ activities: updatedActivities });
    });
}
render() {
  const {activities, isLoading} = this.state;
  if (this.showGoalReachedAlert(activities)) {
       Swal.fire({
         title: 'Goal Reached',
         text: 'You have reached your daily goal!',
         icon: 'check',
         confirmButtonText: 'Awesome!'
       })
     }
  if (isLoading) {
      return <p>Loading...</p>;
  }
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
            <div className="float-right">
                    <Button color="success" tag={Link} to="/activities/new">Add Activity</Button>
                </div>
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
                            <td>{activity.nameOfActivity}</td>
                            <td>{activity.child}</td>
                            <td>{activity.date}</td>
                            <td>{activity.typeOfActivity}</td>
                            <td>{activity.durationOfActivity}</td>
                            <td>{activity.mood}</td>
                            <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary" tag={Link} to={"/activities/" + activity.id}>Edit</Button>
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

