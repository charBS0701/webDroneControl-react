import React, { Component, Fragment } from "react";
import DroneCamera from "./components/DroneCamera";
import DirectionControl from "./components/DirectionControl";
import ThrottleControl from "./components/ThrottleControl";
import Destination from "./components/Destination";
import TakeoffBtn from "./components/TakeoffBtn";
import LandingBtn from "./components/LandingBtn";
import ScreenshotBtn from "./components/ScreenshotBtn";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div id="container">
        <div id="left">
          <DroneCamera style={{border:"solid yellow"}}/>
          <Destination /> 
        </div>
        <div id="right">
          <div id="controllers">
            <DirectionControl />
            <ThrottleControl />
          </div>
          <div id="buttons">
            <TakeoffBtn />
            <LandingBtn />
            <ScreenshotBtn />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
