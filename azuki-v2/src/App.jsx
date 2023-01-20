import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Navigation from "./components/navigation/Navigation";
import SceneRenderer from "./components/SceneRenderer/SceneRenderer";
import Cursor from "./components/mouse/Cursor";

function App() {
  return (
      <div className="App">
          <Cursor />
          <div className="">
              <SceneRenderer/>
              <div className="navigation-positioner">
                  <Navigation/>
              </div>
          </div>
      </div>
  )
}

export default App
