import React from "react";
import Btn from "./Btn";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // WebSocket 서버 주소

const handleTakeoffClick = () => {
  console.log("Takeoff");
  socket.emit("takeoff"); // takeoff 이벤트 메시지 전송
};

const TakeoffBtn = () => {
  return <Btn value="Take-Off" onClick={handleTakeoffClick} />;
};

export default TakeoffBtn;
