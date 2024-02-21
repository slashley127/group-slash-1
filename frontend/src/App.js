import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import SignUp from "./components/SignUp";
import React, { Component } from 'react';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
    return(
        <Router>
          <Routes>
            <Route path='/login' exact={true} element={<Login />}/>
            <Route path='/signup' exact={true} element={<SignUp />}/>
            <Route path='/profile' exact={true} element={<Profile />}/>
            <Route path='/' element={<Navigate to="/login" />}/>
          </Routes>
        </Router>
    )
  }


export default App;
