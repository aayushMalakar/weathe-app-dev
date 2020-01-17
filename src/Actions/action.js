import { SHOW_WEATHER } from "./constants.js";

export const showWeather = weatherData => {
  return {
    type: SHOW_WEATHER,
    weatherData
  };
};
