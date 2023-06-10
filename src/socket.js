import io from "socket.io-client";

const socket = io("http://localhost:3001"); // WebSocket 서버 주소
// export const videoSocket = io("http://localhost:3002"); // WebSocket 서버 주소

export default socket;
