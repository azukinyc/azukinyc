import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import BeansHero from "./components/Hero/BeansHero";
import Cursor from "./components/Mouse/Cursor";

function App() {
  return (
      <div className="App">
          <Cursor />
          <div className="">
              <BeansHero/>
              <div className="navigation-positioner">
                  <Navigation/>
              </div>
          </div>
      </div>
  )
}

export default App
