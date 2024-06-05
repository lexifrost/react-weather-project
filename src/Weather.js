import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      temperature: response.data.main.temp,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="search-input"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search-submit"
              />
            </div>
          </div>
        </form>

        <div className="row mt-5">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <ul className="weather-description">
              <li>
                <FormattedDate date={weatherData.date} />{" "}
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
              </li>
              <li>
                Humidity: {weatherData.humidity}%, Wind: {weatherData.wind}km/h
              </li>
            </ul>
          </div>

          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature-value">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="temperature-unit">°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5863935ee9cca4c02ed68203f807c65b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
