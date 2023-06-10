import { videoSocket } from "../socket";

const DroneCamera = () => {
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
      <img
        src={process.env.PUBLIC_URL + "/droneviewExample.jpg"}
        alt="Drone Camera"
      />
    </div>
  );
};

export default DroneCamera;
