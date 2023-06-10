import React, { useState } from "react";
import Btn from "./Btn";
import axios from "axios";

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
      <h3 style={{ textAlign: "left" }}>Destination</h3>
      <input
        type="text"
        name="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Btn value="입력" onClick={handleDestClick} />
    </>
  );
};

export default Destination;
