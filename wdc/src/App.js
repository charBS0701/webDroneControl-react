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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="left"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <DroneCamera />
          <Destination />
        </div>
        <div
          className="right"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div styled={{ display: "flex", flexDirection: "row" }}>
            <DirectionControl />
            <ThrottleControl />
          </div>
          <div styled={{ display: "flex", flexDirection: "row" }}>
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
