import React from "react";
import Btn from "./Btn";
import socket from "../socket";

const TakeoffBtn = () => {
  const handleTakeoff = () => {
    console.log("Takeoff 명령 입력");
    socket.emit("takeoff"); // takeoff 이벤트 메시지 전송
  };

  return <Btn value="Take-Off" onClick={handleTakeoff} />;
};

export default TakeoffBtn;
