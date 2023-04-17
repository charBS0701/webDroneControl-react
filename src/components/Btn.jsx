import React from "react";

const Btn = (props) => {
  return <button onClick={props.onClick}>{props.value}</button>;
};

export default Btn;
