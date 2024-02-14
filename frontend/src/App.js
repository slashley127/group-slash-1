import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from "./components/SignUp";
import Welcome from './components/Welcome';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<SignUp />}/>
            <Route path='/welcome' exact={true} element={<Welcome />}/>
          </Routes>
        </Router>
      </div>
    )
  }

}

export default App;
