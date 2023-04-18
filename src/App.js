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
      switch (e.key) {
        case "t":
          console.log("takeoff");
          socket.emit("takeoff");
          break;
        case "l":
          console.log("land");
          socket.emit("land");
          break;
        case "w":
          console.log("forward");
          socket.emit("forward");
          break;
        case "s":
          console.log("back");
          socket.emit("back");
          break;
        case "a":
          console.log("left");
          socket.emit("left");
          break;
        case "d":
          console.log("right");
          socket.emit("right");
          break;
        case " ":
          console.log("stop");
          socket.emit("stop");
          break;
        case "b":
          console.log("battery?");
          socket.emit("battery?");
          break;
        default:
          break;
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
        <DroneCamera />
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
