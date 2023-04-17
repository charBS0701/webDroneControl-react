import React from "react";
import Btn from "./Btn";
import socket from "../socket";

const handleTakeoffClick = () => {
  console.log("Takeoff 클릭");
  socket.emit("takeoff"); // takeoff 이벤트 메시지 전송
};

const TakeoffBtn = () => {
  return <Btn value="Take-Off" onClick={handleTakeoffClick} />;
};

export default TakeoffBtn;
