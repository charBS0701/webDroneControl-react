import { Fragment } from "react";
import styled from "styled-components";
import socket from "../socket";

const Container = styled.div`
  margin: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  width: 25%;
`;

const DirectionBtn = styled.img`
  // border: 1px solid black;
  margin: 0 5%;
  &.upBtn,
  &.downBtn {
    margin-left: 27%;
  }
  // 마우스올라가면 투명도 50%
  &:hover {
    opacity: 0.5;
  }
`;

const DirectionControl = () => {
  const handleDirectionControl = (direction) => {
    console.log(`Drone moves ${direction}`);
    socket.emit(direction);
  };

  return (
    <Fragment>
      <Container>
        <DirectionBtn
          id="up"
          onClick={() => handleDirectionControl("up")}
          src={process.env.PUBLIC_URL + "/forward.png"}
          alt="up"
        />
        <div style={{ display: "flex" }}>
          <DirectionBtn
            id="ccw"
            onClick={() => handleDirectionControl("ccw")}
            src={process.env.PUBLIC_URL + "/left.png"}
            alt="ccw"
          />
          <DirectionBtn
            id="cw"
            onClick={() => handleDirectionControl("cw")}
            src={process.env.PUBLIC_URL + "/right.png"}
            alt="cw"
          />
        </div>
        <DirectionBtn
          id="down"
          onClick={() => handleDirectionControl("down")}
          src={process.env.PUBLIC_URL + "/back.png"}
          alt="down"
        />
      </Container>
    </Fragment>
  );
};

export default DirectionControl;
