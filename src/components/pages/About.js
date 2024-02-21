import React, { Component } from 'react';
import './pages.css'

class About extends Component {
    render() {
        return (
            <div className = "App">
                
        
                <h1>What we're about</h1>
                <p className ="about">One of the most pressing issues for many parents in the modern age is monitoring their children’s screen time and determining what effects screen time has. This app allows parents or caregivers to track the activities that their children engage in by category, screentime(video games, youtube, tv), educational activities, outdoor activities, etc. Parents or caregivers can also track their children’s mood and see graphical representations of how screen time and other activities affect mood. The app also features a “non-screen time” activity suggestion function.</p>
                <img src="https://source.unsplash.com/selective-photo-of-a-girl-holding-bubbles-wtxcaDIdOCM"></img>
            </div>
        );
    }
}

export default About;