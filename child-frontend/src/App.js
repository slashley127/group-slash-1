import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { Component } from 'react';
import ProfileInput from './Components/ProfileInput';
import Profile from './Components/Profile';
import ProfileEdit from './Components/ProfileEdit';


class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<ProfileInput />} />
            <Route path='/profile' exact={true} element={<Profile />}/>
            <Route path='/edit' exact={true} element={<ProfileEdit />} />
          </Routes>
        </Router>
      </div>
    )
  }

}

export default App;