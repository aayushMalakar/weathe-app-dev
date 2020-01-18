import { SHOW_WEATHER } from "./constants.js";

/*
load Default weather
*/
export const initLoadWeather = cities => {
  return {
    type: "INIT_SHOW_WEATHER",
    cities
  };
};

export const loadDefaultWeathers = weatherData => {
  return {
    type: "LOAD_DEFAULT_DATA",
    weatherData
  };
};

/*
load custom weather
*/
export const showCurrentWeather = city => {
  return {
    type: "SHOW_CURRENT_WEATHER",
    city
  };
};

export const showWeather = (weatherData, city) => {
  return {
    type: SHOW_WEATHER,
    weatherData,
    city
  };
};
