import { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 25%;
`;

const DirectionBtn = styled.img`
  border: 1px solid black;
  margin: 0 5%;
  &.upBtn, &.downBtn {
    margin-left: 20%;
  }
`;

const DirectionControl = () => {
  return (
    <Fragment>
      <Container>
        <DirectionBtn className="upBtn" src={process.env.PUBLIC_URL + '/uDirection.png'} alt="uDirection" />
        <div style={{ display: "flex" }}>
          <DirectionBtn src={process.env.PUBLIC_URL + '/lDirection.png'} alt="lDirection" />
          <DirectionBtn src={process.env.PUBLIC_URL + '/rDirection.png'} alt="rDirection" />
        </div>
        <DirectionBtn className="downBtn" src={process.env.PUBLIC_URL + '/dDirection.png'} alt="dDirection" />
      </Container>
    </Fragment>
  );
};

export default DirectionControl;
