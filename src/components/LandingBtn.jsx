import React from "react";
import Btn from "./Btn";
import socket from "../socket";

const handleLanding = () => {
  console.log("Landing 명령 입력");
  socket.emit("landing"); // landing 이벤트 메시지 전송
};

const LandingBtn = () => {
  return <Btn value="Landing" />;
};

LandingBtn.onClick = () => handleLanding();
LandingBtn.onKeyDown = (e) => {
  // l 버튼 누르면 착륙
  if (e.key === "l") {
    handleLanding();
  }
};

export default LandingBtn;
