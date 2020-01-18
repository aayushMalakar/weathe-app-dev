// import { showWeather } from "../Actions/action";

const initialState = {
  currentCity: "",
  weatherData: {},
  defaultCity: []
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_WEATHER":
      return {
        ...state,
        currentCity: action.city,
        weatherData: action.weatherData
      };
    case "LOAD_DEFAULT_DATA":
      return {
        ...state,
        defaultCity: [...state.defaultCity, action.weatherData]
      };
    default: {
      return state;
    }
  }
};

export default weather;
