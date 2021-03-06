import { all, call, put, takeLatest } from "redux-saga/effects";

import axios from "utils/http-client";

import {
  fetchTopicsFailure,
  fetchTopicsSuccess
} from "redux/topics/topics.actions";
import topicsActionTypes from "redux/topics/topics.types";

const endpoint = "/topics";

export function* fetchTopics() {
  try {
    const { data } = yield axios.get(endpoint);
    yield put(fetchTopicsSuccess(data));
  } catch (error) {
    yield put(fetchTopicsFailure(error));
  }
}

export function* onFetchTopicsStart() {
  yield takeLatest(topicsActionTypes.START_FETCH_TOPICS, fetchTopics);
}

export function* topicsSagas() {
  yield all([call(onFetchTopicsStart)]);
}
