import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const DroneCamera = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // 클라이언트가 videoStream 이벤트를 수신할 때마다 실행되는 함수
    const handleVideoStream = (stream) => {
      console.log(stream);
      // 브라우저에서 비디오 스트림을 재생할 수 있는 URL을 생성
      const videoBlob = new Blob([stream], { type: "video/mp4" });
      const videoUrl = window.URL.createObjectURL(videoBlob);
      console.log("videoUrl:", videoUrl);
      
      if (videoRef.current) {
        // 비디오 재생 속성 설정
        videoRef.current.setAttribute("src", videoUrl);
        videoRef.current.setAttribute("width", "1280");
        videoRef.current.setAttribute("height", "720");
        videoRef.current.setAttribute("loop", "");
        videoRef.current.setAttribute("autoplay", "");

        // onloadeddata 이벤트리스너를 추가하여, 비디오 로딩 상태를 체크합니다.
        videoRef.current.addEventListener("loadeddata", () => {
          setVideoLoaded(true);
        });
      }
    };

    // videoStream 이벤트를 수신하기 위한 이벤트 리스너 등록
    socket.on("videoStream", handleVideoStream);

    return () => {
      // 컴포넌트가 unmount될 때, event listener를 해제합니다.
      socket.off("videoStream", handleVideoStream);
    };
  }, []);

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "1%",
      }}
    >
      {videoLoaded ? <video ref={videoRef}></video> : <p>Loading video...</p>}
    </div>
  );
};

export default DroneCamera;
