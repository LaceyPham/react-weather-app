import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {Math.round(props.celsiusTemperature)}
      </span>
      <span className="unit">
        <a href="#" id="celsius-link">
          °C
        </a>{" "}
        |
        <a href="#" id="fahrenheit-link">
          °F
        </a>
      </span>
    </div>
  );
}
