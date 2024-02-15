import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from "./components/SignUp";
import React, { Component } from 'react';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<SignUp />}/>
            <Route path='/profile' exact={true} element={<Profile />}/>
          </Routes>
        </Router>
      </div>
    )
  }

}

export default App;
