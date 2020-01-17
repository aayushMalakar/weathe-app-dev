import { showWeather } from "../Actions/action";

const initialState = {
  location: []
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_WEATHER":
      return state;
    default: {
      return state;
    }
  }
};

export default weather;
