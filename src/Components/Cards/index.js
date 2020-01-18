import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Card = props => {
  const [city, setCity] = useState("");
  const [Description, setDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");

  const getDate = () => {
    let date = new Date()
      .toString()
      .split(" ")
      .splice(0, 4)
      .join(" ");
    return date;
  };

  useEffect(() => {
    if (Object.keys(props.weather).length > 0) {
      setCity(props.city);
      setDescription(props.weather.weather[0].main);
      setTemp((props.weather.main.temp - 273.15).toFixed(2));
      setFeelsLike((props.weather.main.feels_like - 273.15).toFixed(2));
      setWind(props.weather.wind.speed);
      setHumidity(props.weather.main.humidity);
    }
  });

  return (
    <div>
      <div>
        <div>City: {city}</div>
        <div>Date: {getDate()}</div>
        <div>
          <span>
            Temp: {temp} <sup>o</sup>C
          </span>
        </div>
        <div>des: {Description}</div>
        <ul>
          <li>Wind: {wind}</li>
          <li>Humidity: {humidity}</li>
          <li>
            Feel's Like: {feelsLike} <sup>o</sup>C
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.weather.weatherData,
    city: state.weather.currentCity
  };
};

export default connect(mapStateToProps)(Card);
