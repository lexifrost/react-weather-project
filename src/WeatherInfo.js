import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
              Humidity: {props.data.humidity}%, Wind: {props.data.wind}km/h
            </li>
          </ul>
        </div>

        <div className="col-6">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <span className="temperature-value">
            {Math.round(props.data.temperature)}
          </span>
          <span className="temperature-unit">°C</span>
        </div>
      </div>
    </div>
  );
}
