import React, { Component } from 'react';
import './App.css';
import ActivityList from './activities/ActivityList';
import ActivityEdit from "./activities/ActivityInputForm";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Enrichment from './randomGenerator/RandomGenerator';

import Navbar from "./components/Navbar";
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile"
import Child from "./components/pages/Child"
import Analyzer from "./components/pages/Analyzer"
import About from "./components/pages/About"



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
        <Route path= '/enrichment/random' element = { <Enrichment/>}/>
        <Route path= '/about' element = {<About/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/child' element = {<Child/>}/>
      </Routes>

    </div>
    </div>
    );
  }
}

export default App;