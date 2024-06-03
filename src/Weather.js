import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="enter a city.." />
        <input type="submit" className="btn btn-primary" />
      </form>
      <div className="row">
        <div className="col-6">
          <h1>Jakarta</h1>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          <p>29°C</p>
          <ul>
            <li>Precipitation: 94%</li>
            <li>Humidity: 84%</li>
            <li>Wind: 0km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Sunday 20:31</li>
            <li>Partly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
