import { takeLatest } from "redux-saga/effects";
import { fetchData, LoadDefault } from "./weatherSaga";

function* watchWeather() {
  yield takeLatest("INIT_SHOW_WEATHER", LoadDefault);
  yield takeLatest("SHOW_CURRENT_WEATHER", fetchData);
}

export default watchWeather;
