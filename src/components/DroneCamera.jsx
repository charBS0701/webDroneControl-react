import React, { useEffect, useRef } from "react";

const DroneCamera = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const initJSMpeg = () => {
      const canvas = canvasRef.current;
      const url = "ws://" + document.location.hostname + ":4000/stream";
      const player = new window.JSMpeg.Player(url, { canvas: canvas });
    };

    const script = document.createElement("script");
    script.src = "jsmpeg.min.js";
    script.async = true;
    script.addEventListener("load", initJSMpeg);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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
      <canvas id="video-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default DroneCamera;
