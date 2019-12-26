import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchExpertsFailure,
  fetchExpertsSuccess
} from "redux/experts/experts.actions";
import expertsActionTypes from "redux/experts/experts.types";

function* fetchExperts() {
  try {
    const {
      data: { experts }
    } = yield axios.get("/experts");
    yield put(fetchExpertsSuccess(experts));
  } catch (error) {
    yield put(fetchExpertsFailure(error));
  }
}

function* onStartFetchExperts() {
  yield takeLatest(expertsActionTypes.START_FETCH_EXPERTS, fetchExperts);
}

export function* expertsSagas() {
  yield all([call(onStartFetchExperts)]);
}
