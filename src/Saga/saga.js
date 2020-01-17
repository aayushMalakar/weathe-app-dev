import { put, call } from "redux-saga/effects";
import { retreiveData } from "../services";
import { showWeather } from "../Actions/action";

export function* fetchData(action) {
  const data = yield call(retreiveData);
  yield put(showWeather(data));
}
