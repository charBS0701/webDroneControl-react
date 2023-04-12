import React, { Component, Fragment } from "react";
import DroneCamera from "./components/DroneCamera";
import DirectionControl from "./components/DirectionControl";
import ThrottleControl from "./components/ThrottleControl";
import Destination from "./components/Destination";
import TakeoffBtn from "./components/TakeoffBtn";
import LandingBtn from "./components/LandingBtn";
import ScreenshotBtn from "./components/ScreenshotBtn";

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-evenly", border:"solid" }}>
        <div
          className="left"
          style={{ display: "flex", flexDirection: "column", width:"100%", border:"solid red", justifyContent:"center", alignItems:"center" }}
        >
          <DroneCamera style={{border:"solid yellow"}}/>
          <Destination /> 
        </div>
        <div
          className="right"
          style={{ display: "flex", flexDirection: "column",width:"100%", border:"solid blue" }}
        >
          <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between" }}>
            <DirectionControl />
            <ThrottleControl />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
