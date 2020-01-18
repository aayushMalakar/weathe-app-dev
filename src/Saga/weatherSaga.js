import { put, call } from "redux-saga/effects";
import { retreiveData } from "../services";
import { showWeather, loadDefaultWeathers } from "../Actions/action";

export function* fetchData(action) {
  const data = yield call(retreiveData, action.city);
  yield put(showWeather(data, action.city));
}

export function* LoadDefault(action) {
  for (let i = 0; i < action.cities.length; i++) {
    let data = yield call(retreiveData, action.cities[i]);
    yield put(loadDefaultWeathers(data));
  }
}
