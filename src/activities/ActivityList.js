import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';


class ActivityList extends Component {
  state = {
    activities: [],
    chartUrl: ""
  };
  /*state = {
    activities: [
      {
        id: 1,
        name: "Xyz",
        child: "Oliver",
        month: "Septemeber",
        day: "Friday",
        year: "2024",
        typeOfActivity: "Coloring",
        durationOfActivity: 20,
        mood: "calm",



        id: 2,
        name: "Xyz",
        child: "Alex",
        month: "May",
        day: "Saturday",
        year: "2023",
        typeOfActivity: "Spelling",
        durationOfActivity: 30,
        mood: "happy",



        id: 3,
        name: "Xyz",
        child: "Molly",
        month: "October",
        day: "Sunday",
        year: "2022",
        typeOfActivity: "Watching TV",
        durationOfActivity: 40,
        mood: "excited",
      }]
  }
  */


  async componentDidMount() {
    this.getCharts();
    const response = await fetch("/activities");
    const body = await response.json();
    this.setState({ activities: body });

  }

  /* showGoalReachedAlert(activities) {
     for (let activity of activities) {
 
       return true; // TODO add in if statements for measurements
 
     }
 
   }
   */

  async getCharts() {
    const apiURL = 'https://quickchart.io/chart/create'

    const chartData = {
      chart: {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'Screen Time in Minutes',
            data: [60, 50, 30, 45, 15, 80, 10],
          }],
        },
        options: {
          legend: {
            labels: {
              fontSize: 14,
              fontStyle: 'bold',
              fontColor: '#E71D06',
            }
          },
          title: {
            display: true,
            text: 'Screen Time Tracker',
            fontSize: 20,
            fontColor: '#066CE7',
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontFamily: 'sans-serif',
                  fontColor: '#FAFDF8',
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontFamily: 'sans-serif',
                  fontStyle: 'bold',
                  fontColor: '#0CC6DD',
                },
              },
            ],
          },
        }
      }
    };

    const response = await fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chartData),
    });
    const parsedResponse = await response.json();

    console.log(parsedResponse.url)
    this.setState({ chartUrl: parsedResponse.url });
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
    const { activities, isLoading, chartUrl} = this.state;
  

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
                  <td>{activity.name}</td>
                  <td>{activity.child}</td>
                  <td>{activity.month}/{activity.day}/{activity.year}</td>
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
          <div className='charts'><img src={chartUrl}></img></div>
        </header>
      </div>
    );
  }
}
export default ActivityList;


