import React, { useEffect } from "react";
import DroneCamera from "./components/DroneCamera";
import DirectionControl from "./components/DirectionControl";
import ThrottleControl from "./components/ThrottleControl";
import Destination from "./components/Destination";
import TakeoffBtn from "./components/TakeoffBtn";
import LandingBtn from "./components/LandBtn";
import ScreenshotBtn from "./components/ScreenshotBtn";
import "./style.css";
import socket from "./socket";

const App = () => {
  useEffect(() => {
    // 키 입력 처리
    const handleKeyDown = (e) => {
      if (e.key === "t") {
        console.log("takeoff");
        socket.emit("takeoff");
      } else if (e.key === "l") {
        console.log("land");
        socket.emit("land");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="container">
      <div id="left">
        <DroneCamera style={{ border: "solid yellow" }} />
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
};

export default App;
