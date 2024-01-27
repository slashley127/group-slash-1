
import React, { Component } from 'react';
import './App.css';
import ActivityList from './activities/ActivityList';
import ActivityEdit from "./activities/ActivityInputForm";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile"
import Child from "./components/pages/Child"
import Analyzer from "./components/pages/Analyzer"
import Activities from "./components/pages/Activities"
import About from "./components/pages/About"
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
<>
  <div>
      <Navbar />
  </div>

  <div className = "navbar-container">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/child" element={<Child/>} />
      <Route path="/activities" element={<Activities/>} />
      <Route path="/analyzer" element={<Analyzer/>} />
      <Route path="/activities" element={<About/>} />
    </Routes>
  </div>

  <div>
    <Routes>
      <Route path='/' exact={true} element = { <Home/>}/>
      <Route path='/api/activities' exact={true} element={<ActivityList/>}/>
      <Route path='/api/activities/id' element={<ActivityEdit/>}/>
    </Routes>
  </div>

</>
    );
  }
}

export default App;