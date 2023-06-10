import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const DestinationInput = styled.input`
  width: 45%;
  font-size: 1.2rem;
  height: 10%;
  margin-bottom: 2%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
`;

const Btn = styled.button`
  width: 20%;
  font-size: 1.1rem;
  height: 15%;
  padding: 1%;
  background-color: #ccc;
  border: 1px solid black;
  margin-bottom: 10px;
  border-radius: 10px;
  // 가운데 정렬
  display: flex;
  justify-content: center;
  align-items: center;
  // 마우스올라가면 투명도 50%
  &:hover {
    opacity: 0.5;
  }
  background-color: #91ccec;
  box-shadow: 1px 4px 0 rgb(0, 0, 0, 0.5);
`;

const Destination = () => {
  const [destination, setDestination] = useState("");

  const handleDestClick = () => {
    alert(`목적지: ${destination}`);
    sendDestination();
  };

  const sendDestination = async () => {
    console.log(destination);
    console.log("sendDestination");
    try {
      const response = await axios.post(
        "http://localhost:3001/api/destination",
        {
          destination: destination,
        }
      );

      if (response.status === 200) {
        console.log("Destination sent successfully");
      } else {
        console.log("Error sending destination");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "left" }}>Destination</h1>
      <DestinationInput
        type="text"
        name="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Btn onClick={handleDestClick}>목적지 입력</Btn>
    </>
  );
};

export default Destination;
