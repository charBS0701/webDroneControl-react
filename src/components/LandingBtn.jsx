import Btn from "./Btn";
import socket from "../socket";

const handleLandingClick = () => {
    console.log("Landing 클릭");
    socket.emit("landing"); // landing 이벤트 메시지 전송
};

const LandingBtn = () => {
  return <Btn value="Landing" onClick={handleLandingClick} />;
};

export default LandingBtn;
