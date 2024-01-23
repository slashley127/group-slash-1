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
              {activities.map(activity =>
                  <div key={activity.id}>
                    {activity.name}
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;


