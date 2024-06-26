import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-5">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul className="weather-description">
            <li>
              <FormattedDate date={props.data.date} />{" "}
              <span className="text-capitalize">{props.data.description}</span>
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>

        <div className="col-6">
          <div className="d-flex align-items-center">
            <WeatherIcon code={props.data.icon} size={60} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
