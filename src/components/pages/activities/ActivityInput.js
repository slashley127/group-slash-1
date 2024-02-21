/*import React, { useState, useEffect } from 'react';
import '../pages.css';
import { Link, useParams, withRouter, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

const ActivityForm = () => {
    
  const { id } = useParams();
 const [editActivityId, setEditActivityId] = useState('');
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState('');
  const [nameOfActivity, setNameOfActivity] = useState('');
  const [typeOfActivity, setTypeOfActivity] = useState('');
  const [date, setDate] = useState('');
  const [durationOfActivity, setDurationOfActivity] = useState('');
  const [mood, setMood] = useState('');

  useEffect(() => {
    const fetchChildren = async () => {
        try {
          const response = await fetch('/child');
          const childrenData = await response.json();
          console.log('Children data:', childrenData);
  
          // Ensure that childrenData is an array before setting the state
          if (Array.isArray(childrenData)) {
            setChildren(childrenData);
          } else {
            console.error('Invalid data format for children:', childrenData);
          }
        } catch (error) {
          console.error('Error fetching children:', error);
        }
      };
  
      fetchChildren();
    }, []);

  const handleChildChange = (event) => {
    setSelectedChild(event.target.value);
  };

  const handleActivityNameChange = (event) => {
    setNameOfActivity(event.target.value);
  };

  const handleTypeOfActivity = (event) => {
    setTypeOfActivity(event.target.value);
  };

  const handleDate = (event) => {
    const dateValue = event.target.value;
    const formattedDate = new Date(dateValue).toISOString().split('T')[0];
    setDate(formattedDate);
  };

  const handleDurationOfActivity = (event) => {
    setDurationOfActivity(event.target.value);
  };

  const handleMood = (event) => {
    setMood(event.target.value);
  };

  useEffect(() => {
    // Set the editActivityId based on the id parameter
    setEditActivityId(id || '');
  }, [id]);



  const handleSubmit = async (event) => {
    event.preventDefault();
        if (!selectedChild || !nameOfActivity || !typeOfActivity || !date || !durationOfActivity || !mood) {
          console.error('Please fill in all required fields');
          return;
        }
    const activityData = { selectedChild, nameOfActivity, typeOfActivity, date, durationOfActivity, mood };
    console.log('Activity data:', activityData);

    try {
      let response;
      
        if (editActivityId) {
            response = await fetch(`/activities/${editActivityId}`, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
              body: JSON.stringify(activityData),
            });
          } else {
            response = await fetch(`/activities`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(activityData),
            });
          }
    
          if (!response.ok) {
            console.error('Error during activity submission:', response.status);
            return;
          }
          setEditActivityId('');
          setSelectedChild('');
          setNameOfActivity('');
          setDate('');
          setDurationOfActivity('');
          setMood('');
          setTypeOfActivity('');

          console.log('Activity submitted successfully');
        } catch (error) {
          console.error('Error during activity submission:', error);
        }
    }
      

  return (
    <form onSubmit={handleSubmit}>
          <label>
        Select Child:
        <select value={selectedChild} onChange={handleChildChange}>
          <option value="" disabled>Select a child</option>
          {children.map((child) => (
            <option key={child.id} value={child.id}>
              {child.childName}
            </option>
          ))}
        </select>
      </label>
      <label>
        Name of Activity:
        <input type="text" value={nameOfActivity} onChange={handleActivityNameChange} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDate} />
      </label>
      <label>
        Duration of Activity:
        <input type="text" value={durationOfActivity} onChange={handleDurationOfActivity} />
      </label>
      <label>
        Mood:
        <input type="text" value={mood} onChange={handleMood} />
      </label>
      <label>
        Type of Activity:
        <select
          value={typeOfActivity}
          onChange={handleTypeOfActivity}
          autoComplete="typeOfActivity"
        >
          <option value="screen time">screen time</option>
          <option value="educational">educational</option>
          <option value="exercise">exercise</option>
          <option value="social">social</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ActivityForm;
*/