import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { Component } from 'react';
import ProfileInput from './Components/ProfileInput';
import ProfileEdit from './Components/ProfileEdit';
import ViewChildProfile from './Components/ViewChildProfile';
import AllChildren from './Components/AllChildren';


class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<ProfileInput />} />
            <Route path="/child/:id" exact={true} element={<ViewChildProfile />}/>
            <Route path='/edit' exact={true} element={<ProfileEdit />} />
            <Route path='/viewAll' element={<AllChildren />} />
          </Routes>
        </Router>
      </div>
    )
  }

}

export default App;