import { showWeather } from "../Actions/action";

const initialState = {
  weatherData: {}
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_WEATHER":
      return { weatherData: action.weatherData };
    default: {
      return state;
    }
  }
};

export default weather;
