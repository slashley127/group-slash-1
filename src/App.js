import React, { Component } from 'react';

class App extends Component {
  state = {
    activities: []
  };

  async componentDidMount() {
    const response = await fetch("/api/activities");
    const body = await response.json();
    this.setState({activities: body});
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
                       </tr>
                       
                        {activities.map(activity =>
                          <tr key={activity.id}>
                            <td>{activity.name}</td>
                            <td>{activity.child}</td>
                            <td>{activity.month}/{activity.day}/{activity.year}</td>
                            <td>{activity.typeOfActivity}</td>
                            <td>{activity.durationOfActivity}</td>
                            <td>{activity.mood}</td>
                       </tr>
                        )}
                    </table>
                  </div>
          </header>
        </div>
    );
  }
}
export default App;


