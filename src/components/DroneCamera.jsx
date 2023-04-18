const DroneCamera = () => {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="drone-camera" style={{ fontWeight: "bolder" }}>
        Camera
      </div>
      <img
        src={process.env.PUBLIC_URL + "/droneviewExample.jpg"}
        alt="Drone Camera"
      />
    </div>
  );
};

export default DroneCamera;
