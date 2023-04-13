import React from "react";

const Btn = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Btn;
