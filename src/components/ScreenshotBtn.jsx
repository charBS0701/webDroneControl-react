import Btn from './Btn';
import socket from '../socket';

const handleScreenshotClick = () => {
    console.log('Screen Shot 클릭');
    socket.emit('screenshot'); // screenshot 이벤트 메시지 전송
};

const ScreenshotBtn = () => {
    return (
        <Btn value="Screen Shot" onClick={handleScreenshotClick}/>
    );
};

export default ScreenshotBtn;