import React from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import SceneRenderer from "./components/SceneRenderer/SceneRenderer";

function App() {
  return (
    <div className="App">
        <div className="">
            <SceneRenderer/>
            <div className="navigation-positioner">
                <Navigation/>
            </div>
        </div>
    </div>
  );
}

export default App;
