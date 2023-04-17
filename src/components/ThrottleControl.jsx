import styled from "styled-components";
import { Fragment, useState, useEffect } from "react";

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
`;

const ThrottleControl = () => {
  const [currentDirection, setCurrentDirection] = useState("");

  const handleDirectionClick = (direction) => {
    setCurrentDirection(direction);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "w":
        setCurrentDirection("forward");
        break;
      case "a":
        setCurrentDirection("left");
        break;
      case "d":
        setCurrentDirection("right");
        break;
      case "s":
        setCurrentDirection("back");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (currentDirection === "forward") {
      console.log("Drone moves forward");
      // 코드 작성: 드론 앞으로 움직이기
    } else if (currentDirection === "left") {
      console.log("Drone moves left");
      // 코드 작성: 드론 왼쪽으로 움직이기
    } else if (currentDirection === "right") {
      console.log("Drone moves right");
      // 코드 작성: 드론 오른쪽으로 움직이기
    } else if (currentDirection === "back") {
      console.log("Drone moves back");
      // 코드 작성: 드론 뒤로 움직이기
    }
  }, [currentDirection]);

  return (
    <Fragment>
      <Container tabIndex="0">
        <MovingBtn
          id="forward"
          onKeyDown={handleKeyDown}
          onClick={() => handleDirectionClick("forward")}
          isPressed={currentDirection === "forward"}
          src={process.env.PUBLIC_URL + "/forward.png"}
          alt="forward"
        />
        <div style={{ display: "flex" }}>
          <MovingBtn
            id="left"
            onKeyDown={handleKeyDown}
            onClick={() => handleDirectionClick("left")}
            isPressed={currentDirection === "left"}
            src={process.env.PUBLIC_URL + "/left.png"}
            alt="left"
          />
          <MovingBtn
            id="right"
            onKeyDown={handleKeyDown}
            onClick={() => handleDirectionClick("right")}
            isPressed={currentDirection === "right"}
            src={process.env.PUBLIC_URL + "/right.png"}
            alt="right"
          />
        </div>
        <MovingBtn
          id="back"
          onKeyDown={handleKeyDown}
          onClick={() => handleDirectionClick("back")}
          isPressed={currentDirection === "back"}
          src={process.env.PUBLIC_URL + "/back.png"}
          alt="back"
        />
      </Container>
    </Fragment>
  );
};

export default ThrottleControl;
