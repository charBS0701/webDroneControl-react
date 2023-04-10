import React, { Component, Fragment } from "react";
import DroneCamera from "./components/DroneCamera";
import DirectionControl from "./components/DirectionControl";
import ThrottleControl from "./components/ThrottleControl";
import TakeoffBtn from "./components/TakeoffBtn";
import LandingBtn from "./components/LandingBtn";
import ScreenshotBtn from "./components/ScreenshotBtn";

class App extends Component {

  render() {
  return (
    <Fragment>
      <DroneCamera/>
      <DirectionControl/>
      <ThrottleControl/>
      <TakeoffBtn/>
      <LandingBtn/>
      <ScreenshotBtn/>
    </Fragment>
  )
  } 
};

export default App;
