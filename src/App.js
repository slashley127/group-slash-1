import React, { Component } from 'react';
import './App.css';
import ActivityList from './activities/ActivityList';
import ActivityEdit from "./activities/ActivityInputForm";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/navigationBar/Navbar";
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile"
import Child from "./components/pages/Child"
import About from "./components/pages/About"
import EmergencyContact from './emergencyContact/EmergencyContact';
import EmergencyContactForm from './emergencyContact/EmergencyContactForm';



class App extends Component {
  render() {
    return (
      <div>
        <div className ="navbar-container">
          <Navbar />
        </div>
      <div>
     
      <Routes>
        <Route path='/' exact={true} element = { <Home/>}/>
        <Route path='/activities' exact={true} element={<ActivityList/>}/>
        <Route path='/activities/:id' element={<ActivityEdit/>}/>
        <Route path= '/about' element = {<About/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/child' element = {<Child/>}/>
        <Route path="/emergencycontacts" element={<EmergencyContact/>}/>
        <Route path="/emergencycontacts/:id" element = {<EmergencyContactForm/>}/>
      </Routes>
  
    </div>
    </div>
    );
  }
  }

export default App;