import React from "react";

const WeatherData = ({ conditions, time }) => {
  return (
    <div>
      <p>
        <span>Conditions:</span>
        {conditions}
      </p>
      <p>
        <span>Time:</span>
        {time}
      </p>
    </div>
  );
};

export default WeatherData;
