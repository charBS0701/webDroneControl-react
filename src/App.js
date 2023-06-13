import React, { useEffect } from "react";
import DroneCamera from "./components/DroneCamera";
import DirectionControl from "./components/DirectionControl";
import ThrottleControl from "./components/ThrottleControl";
import Destination from "./components/Destination";
import TakeoffBtn from "./components/TakeoffBtn";
import LandingBtn from "./components/LandBtn";
import ScreenshotBtn from "./components/ScreenshotBtn";
import socket from "./socket";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding-top: 2%;
`;

const LeftSide = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid black;
`;

const RightSide = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  // border: 1px solid black;
`;

const App = () => {
  useEffect(() => {
    const forwardBtn = document.getElementById("forward");
    const backBtn = document.getElementById("back");
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");
    const upBtn = document.getElementById("up");
    const downBtn = document.getElementById("down");
    const ccwBtn = document.getElementById("ccw");
    const cwBtn = document.getElementById("cw");

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
          forwardBtn.style.opacity = 0.5;
          socket.emit("forward");
          break;
        case "s":
          console.log("back");
          socket.emit("back");
          backBtn.style.opacity = 0.5;
          break;
        case "a":
          console.log("left");
          socket.emit("left");
          leftBtn.style.opacity = 0.5;
          break;
        case "d":
          console.log("right");
          socket.emit("right");
          rightBtn.style.opacity = 0.5;
          break;
        case " ":
          console.log("stop");
          socket.emit("stop");
          break;
        case "b":
          console.log("battery?");
          socket.emit("battery?");
          break;
        case "ArrowUp":
          console.log("up");
          socket.emit("up");
          upBtn.style.opacity = 0.5;
          break;
        case "ArrowDown":
          console.log("down");
          socket.emit("down");
          downBtn.style.opacity = 0.5;
          break;
        case "ArrowLeft":
          console.log("ccw");
          socket.emit("ccw");
          ccwBtn.style.opacity = 0.5;
          break;
        case "ArrowRight":
          console.log("cw");
          socket.emit("cw");
          cwBtn.style.opacity = 0.5;
          break;

        default:
          break;
      }
    };
    const handleKeyUp = (e) => {
      switch (e.key) {
        case "w":
          console.log("forward stop");
          forwardBtn.style.opacity = 1; // opacity 1로 변경
          socket.emit("stop");
          break;
        case "s":
          console.log("back stop");
          backBtn.style.opacity = 1; // opacity 1로 변경
          socket.emit("stop");
          break;
        case "a":
          console.log("left stop");
          leftBtn.style.opacity = 1; // opacity 1로 변경
          socket.emit("stop");
          break;
        case "d":
          console.log("right stop");
          rightBtn.style.opacity = 1; // opacity 1로 변경
          socket.emit("stop");
          break;
        case "ArrowUp":
          console.log("up stop");
          upBtn.style.opacity = 1; // opacity 1로 변경
          socket.emit("stop");
          break;
        case "ArrowDown":
          console.log("down stop");
          downBtn.style.opacity = 1; // opacity 1로 변경
          socket.emit("stop");
          break;
        case "ArrowLeft":
          console.log("ccw stop");
          ccwBtn.style.opacity = 1; // opacity 1로 변경
          socket.emit("stop");
          break;
        case "ArrowRight":
          console.log("cw stop");
          cwBtn.style.opacity = 1; // opacity 1로 변경
          socket.emit("stop");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <LeftSide>
        <DroneCamera />
      </LeftSide>
      <RightSide>
        <div
          id="controllers"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "5%",
          }}
        >
          <DirectionControl />
          <ThrottleControl />
        </div>
        <div
          id="buttons"
          style={{
            display: "flex",
            flexDirection: "column",
            // border: "solid",
            alignItems: "center",
          }}
        >
          <TakeoffBtn />
          <LandingBtn />
          <ScreenshotBtn />
          <Destination style={{ marginTop: "15%" }} />
        </div>
      </RightSide>
    </Container>
  );
};

export default App;
