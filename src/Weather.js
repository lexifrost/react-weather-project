import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city.."
          className="search-input"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary search-submit"
        />
      </form>

      <div className="row mt-5">
        <div className="col-6">
          <h1>Tokyo</h1>
          <ul className="weather-description">
            <li>Sunday 10:31, partly cloudy</li>
            <li>Humidity: 42%, Wind: 13km/h</li>
          </ul>
        </div>

        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          <span className="temperature-value">26</span>
          <span className="temperature-unit">°C</span>
        </div>
      </div>
    </div>
  );
}
