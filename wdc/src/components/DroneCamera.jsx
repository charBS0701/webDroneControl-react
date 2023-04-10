import { Fragment } from "react";

const DroneCamera = () => {



  return (
    <Fragment style={{ width:"50%" }}>
      <div className="drone-camera">Camera</div>
      <img
        src={process.env.PUBLIC_URL + '/droneviewExample.jpg'}
        alt="Drone Camera"
      />
    </Fragment>
  );
};

export default DroneCamera;
