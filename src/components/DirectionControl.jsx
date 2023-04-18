import { Fragment } from "react";
import styled from "styled-components";

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
`;

const DirectionControl = () => {
  return (
    <Fragment>
      <Container>
        <DirectionBtn
          className="upBtn"
          src={process.env.PUBLIC_URL + "/forward.png"}
          alt="forward"
        />
        <div style={{ display: "flex" }}>
          <DirectionBtn src={process.env.PUBLIC_URL + "/left.png"} alt="left" />
          <DirectionBtn
            src={process.env.PUBLIC_URL + "/right.png"}
            alt="right"
          />
        </div>
        <DirectionBtn
          className="downBtn"
          src={process.env.PUBLIC_URL + "/back.png"}
          alt="back"
        />
      </Container>
    </Fragment>
  );
};

export default DirectionControl;
