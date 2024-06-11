import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} />

            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
