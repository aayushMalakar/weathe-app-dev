import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./index.css";

const SomeCard = props => {
  // const [city, setCity] = useState("");
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
    if (Object.keys(props).length > 0) {
      // setCity(props.city);
      setDescription(props.weather[0].main);
      setTemp((props.main.temp - 273.15).toFixed(2));
      setFeelsLike((props.main.feels_like - 273.15).toFixed(2));
      setWind(props.wind.speed);
      setHumidity(props.main.humidity);
    }
  });

  return (
    <div className="default-card">
      <div>
        {/* <div>City: {city}</div> */}
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

export default SomeCard;
