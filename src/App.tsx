import {useEffect, useState} from 'react'
import './App.css';
import '@unreal/unreal-components/dist/style.css'
import { Detector } from "@unreal/pan";
import Navigation from "./components/Navigation/Navigation";
import BeansHero from "./components/Hero/BeansHero";
import { Cursor } from "@unreal/unreal-components"
import bean from './assets/svgs/bean.svg'
import VVChecks from "./components/VVChecks/VVChecks";

function App() {
    const [customCursorEnabled, setCustomCursorEnabled] = useState(false)
    useEffect(() => {
        const detector = Detector.getInstance()
        if (detector !== undefined) {
            setCustomCursorEnabled(!detector.isTouchScreen() && !detector.isMobile())
        }
    }, [customCursorEnabled])
  return (
      <div className="App">
          {customCursorEnabled &&
            <Cursor hexColor={'rgba(0,0,0,0)'} size={20} sizeLarge={40} svg={bean} />
          }
          <div className="">
              <VVChecks/>
              <div className="navigation-positioner">
                  <Navigation/>
              </div>
          </div>
      </div>
  )
}

export default App
