import React, { Component } from 'react';
import './App.css';
import ActivityList from './components/pages/activities/ActivityList';
import ActivityEdit from "./components/pages/activities/ActivityInputForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Enrichment from './components/randomGenerator/RandomGenerator';
import FilteredEnrichmentActivities from './components/randomGenerator/FilterEnrichmentActivities';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile"
import Child from "./components/pages/Child"
import Analyzer from "./components/pages/Analyzer"
import About from "./components/pages/About"
import ContactForm from './components/pages/ContactForm';


class App extends Component {
  render() {
    return (
      <div className= "App">
      <div className = "total-app">
       <Navbar/>
      <div>
      <div className= "blue-rectangle">
        <h1>Welcome!</h1>
      </div>
     
      <Routes>
        <Route path='/' exact={true} element = { <Home/>}/>
        <Route path='/activities' exact={true} element={<ActivityList/>}/>
        <Route path='/activities/:id' element={<ActivityEdit/>}/>
        <Route path= '/enrichment/random' element = { <Enrichment/>}/>
        <Route path='/enrichment/filtered' element ={ <FilteredEnrichmentActivities/>}/>
        <Route path= '/about' element = {<About/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/child' element = {<Child/>}/>
        <Route path='/contact' element = {<ContactForm/>}/>
      </Routes>
      <div className="orange-rectangle"></div>
    </div>
    </div>
    </div>
    );
  }
  }

export default App;