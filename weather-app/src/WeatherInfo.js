import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <li>
        <FormattedDate date={props.data.date} />, {props.data.description}
      </li>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={50} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity:{" "}
              <span className="elementsInfo">{props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span className="elementsInfo">{props.data.wind} km/h</span>
            </li>
            <li>
              Pressure:{" "}
              <span className="elementsInfo">{props.data.pressure} hPa</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
