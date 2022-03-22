import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "fe382dacb24af647c1a1bcdf31cefe84";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showWeather);

    function showWeather(response) {
      let icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
      setMessage(
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)}°F</li>
          <li>Description: {response.data.weather[0].description}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind: {Math.round(response.data.wind.speed)}mph</li>
          <li>
            <img src={icon} alt="weather icon"></img>
          </li>
        </ul>
      );
    }

    if (city.length > 0) {
      return message;
    } else {
      alert("Please enter a city");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h6>{message}</h6>
    </div>
  );
}
