import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { Component } from 'react';
import ProfileInput from './Components/ProfileInput';
import Profile from './Components/Profile';
import ProfileEdit from './Components/ProfileEdit';
import ViewChildProfile from './Components/ViewChildProfile';


class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<ProfileInput />} />
            <Route path='/profile' element={<Profile />}/>
            <Route path="/child/:id" exact={true} element={<ViewChildProfile />}/>
            <Route path='/edit' exact={true} element={<ProfileEdit />} />
          </Routes>
        </Router>
      </div>
    )
  }

}

export default App;