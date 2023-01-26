import { useState } from 'react'
import './App.css';
import '@unreal/unreal-components/dist/style.css'
import Navigation from "./components/Navigation/Navigation";
import BeansHero from "./components/Hero/BeansHero";
import { Cursor } from "@unreal/unreal-components"
import bean from './assets/svgs/bean.svg'


function App() {
  return (
      <div className="App">
          <Cursor hexColor={'rgba(0,0,0,0)'} size={20} sizeLarge={40} svg={bean} />
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
