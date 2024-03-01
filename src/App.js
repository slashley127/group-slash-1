import React, { Component } from 'react';
import './App.css';
import ActivityList from './components/pages/activities/ActivityList';
import ActivityEdit from "./components/pages/activities/ActivityInputForm";
import ActivityForm from './components/pages/activities/ActivityInput';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Enrichment from './components/randomGenerator/RandomGenerator';
import FilteredEnrichmentActivities from './components/randomGenerator/FilterEnrichmentActivities';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile"
import Child from "./components/pages/Child/Child"
import Analyzer from "./components/pages/Analyzer"
import About from "./components/pages/About"
import ContactForm from './components/pages/ContactForm';
import ProfileInput from './components/pages/Child/ProfileInput';


class App extends Component {
  render() {
    return (
      <div className= "App">
      <div className = "total-app">
       <Navbar/>
      <div>
      <div className= "blue-rectangle">
        <h1 className="welcome-text">Hello, KidVenturer!</h1>
        <img className ="profile-pic" src= "https://source.unsplash.com/smiling-woman-wearing-turban-i2hoD-C2RUA"/>
      </div>
  
      <Routes>
        <Route path='/' exact={true} element = { <Home/>}/>
        <Route path='/activities' exact={true} element={<ActivityList/>}/>
        <Route path='/activities/new' element={<ActivityEdit/>}/>
        <Route path='/activities/:id' element = {<ActivityEdit/>}/>
        <Route path='/activities/test' element = {<ActivityForm/>}/>
        <Route path= '/enrichment/random' element = { <Enrichment/>}/>
        <Route path='/enrichment/filtered' element ={ <FilteredEnrichmentActivities/>}/>
        <Route path= '/about' element = {<About/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/contact' element = {<ContactForm/>}/>
        <Route path = '/child/new' element={<ProfileInput/>}/>
        <Route path = '/child' element={<Child/>}/>
      </Routes>
        <footer className="orange-rectangle"></footer>
      </div>
    </div>
    </div>
    );
  }
  }

export default App;