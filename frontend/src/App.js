import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import SignUp from "./components/SignUp";
import React, { Component } from 'react';
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
    return(
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<SignUp />}/>
            <Route path='/home' element={<Home />} />
            <Route path='/profile/:id' exact={true} element={<Profile />}/>
          </Routes>
        </Router>
    )
  }


export default App;
