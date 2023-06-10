import styled from "styled-components";
import { Fragment, useState, useEffect } from "react";
import socket from "../socket";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 25%;
`;

const MovingBtn = styled.img`
  opacity: 1;
  &:active {
    opacity: 0.5;
  }

  margin: 0 5%;
  &.forwardBtn,
  &.downBtn {
    margin-left: 40%;
  }
  // 마우스올라가면 투명도 50%
  &:hover {
    opacity: 0.5;
  }
`;

const ThrottleControl = () => {
  const handleDirectionClick = (direction) => {
    console.log(`Drone moves ${direction}`);
    socket.emit(direction);
  };

  return (
    <Fragment>
      <Container>
        <MovingBtn
          id="forward"
          onClick={() => handleDirectionClick("forward")}
          src={process.env.PUBLIC_URL + "/forward.png"}
          alt="forward"
        />
        <div style={{ display: "flex" }}>
          <MovingBtn
            id="left"
            onClick={() => handleDirectionClick("left")}
            src={process.env.PUBLIC_URL + "/left.png"}
            alt="left"
          />
          <MovingBtn
            id="right"
            onClick={() => handleDirectionClick("right")}
            src={process.env.PUBLIC_URL + "/right.png"}
            alt="right"
          />
        </div>
        <MovingBtn
          id="back"
          onClick={() => handleDirectionClick("back")}
          src={process.env.PUBLIC_URL + "/back.png"}
          alt="back"
        />
      </Container>
    </Fragment>
  );
};

export default ThrottleControl;
