import React from 'react';
import bean from './assets/images/bean-7783.png'
import './App.css';
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
        <div className="">
            <div className="image-wrapper">
                <img src={bean} alt="Azuki Bean #7783"/>
            </div>
            <div className="navigation-positioner">
                <Navigation/>
            </div>
        </div>
    </div>
  );
}

export default App;
