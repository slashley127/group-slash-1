
import React, { Component } from 'react';
import './App.css';
import ActivityList from './activities/ActivityList';
import ActivityEdit from "./activities/ActivityInputForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home"
import Enrichment from './RandomGenerator';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Routes>
        <Route path='/' exact={true} element = { <Home/>}/>
        <Route path='/activities' exact={true} element={<ActivityList/>}/>
        <Route path='/activities/:id' element={<ActivityEdit/>}/>
        <Route path= '/enrichment/random' element = { <Enrichment/>}/>
      </Routes>
    </Router>
    </div>
    );
  }
  }

export default App;