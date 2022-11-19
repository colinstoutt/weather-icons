import React from "react";
import WeatherForecast from "./components/WeatherForecast";
import "./styles.css";
import weatherArr from "./weatherData";

const weather = weatherArr.map((el, idx) => {
  return <WeatherForecast {...el} key={idx} />;
});

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>{weather}</section>
    </div>
  );
}
