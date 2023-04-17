import React from "react";
import Btn from "./Btn";
import socket from "../socket";

const handleTakeoff = () => {
  console.log("Takeoff 명령 입력");
  socket.emit("takeoff"); // takeoff 이벤트 메시지 전송
};

const TakeoffBtn = () => {
  return <Btn value="Take-Off" />;
};

TakeoffBtn.onClick = () => handleTakeoff();
TakeoffBtn.onKeyDown = (e) => {
  // t 버튼 누르면 이륙
  if (e.key === "t") {
    handleTakeoff();
  }
};

export default TakeoffBtn;
