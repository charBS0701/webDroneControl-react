import React from "react";
import styled from "styled-components";

const BtnComponent = styled.button`
  width: 50%;
  height: 50px;
  font-size: 1.1rem;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  background-color: ${(props) => (props.isClicked ? "red" : "white")};
  &:hover {
    opacity: 0.5;
  }
  box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);
  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
  background-color: #91ccec;
`;

const Btn = React.forwardRef(({ value, onClick, onKeyDown }, ref) => {
  return (
    <BtnComponent onClick={onClick} onKeyDown={onKeyDown} ref={ref}>
      {value}
    </BtnComponent>
  );
});

export default Btn;
