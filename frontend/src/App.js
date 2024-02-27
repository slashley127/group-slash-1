import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import SignUp from "./components/SignUp";
import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';

function App() {
    return(
        <Router>
          <Routes>
            <Route path='/' exact={true} element={<Login />}/>
            <Route path='/home/:id' element={<Home />} />
            <Route path='/signup' exact={true} element={<SignUp />}/>
          </Routes>
        </Router>
    )
  }


export default App;
