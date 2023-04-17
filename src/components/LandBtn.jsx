import React from "react";
import Btn from "./Btn";
import socket from "../socket";

const LandBtn = () => {
  const handleLand = () => {
    console.log("Land 명령 입력");
    socket.emit("land"); // land 이벤트 메시지 전송
  };

  return <Btn value="Land" onClick={handleLand} />;
};

export default LandBtn;
