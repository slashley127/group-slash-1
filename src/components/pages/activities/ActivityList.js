import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import '../pages.css';


class ActivityList extends Component {
  state = {
    activities: [],
    chartUrl: ""
  };

  async componentDidMount() {
    this.getCharts();
    const response = await fetch("/activities");
    const body = await response.json();
    this.setState({ activities: body });

  }

   showGoalReachedAlert(activities) {
     for (let activity of activities) {
 
       return true; // TODO add in if statements for measurements
 
     }
 
   }
   

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
                <div className="activities-table">
              <h2 className="header-table">Activities</h2>
                    <table >
                      <tr className="activities-table-text-spacing-headers">
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Child</th>
                        <th>Type</th>
                        <th>Duration</th>
                        <th>Mood</th>
                       </tr>
                       
                        {activities.map(activity =>
                          <tr key={activity.id} className="activities-table-body">
                            <td>{activity.date}</td>
                            <td>{activity.nameOfActivity}</td>
                            <td>{activity.child}</td>
                            <td>{activity.typeOfActivity}</td>
                            <td>{activity.durationOfActivity}</td>
                            <td>{activity.mood}</td>
                            <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary" tag={Link} to={"/activities/" + activity.id}>Edit</Button>
                                <Button size="sm" color="primary" onClick={() => this.remove(activity.id)}>Delete</Button>
                            </ButtonGroup>
                            </td>
                       </tr>
                        )}
                    </table>
                   
                    </div>
                    <div className="float-right">
                    <Button  tag={Link} to="/activities/new">Add Activity</Button>
                </div>
                  </div>
              <div className='charts'><img src={chartUrl}></img></div>
          </header>
        </div>
    );
  }
}
export default ActivityList;

