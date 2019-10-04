import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import postsActionTypes from "./posts.types";
import { postCreateSuccess, postCreateFailure } from "./posts.actions";

const endpoint = "/posts";

export function* createPost({ payload }) {
  try {
    const res = yield axios.post(endpoint, payload);
    yield put(postCreateSuccess(res.data));
  } catch (error) {
    yield put(postCreateFailure(error));
  }
}

export function* onCreatePostStart() {
  yield takeLatest(postsActionTypes.START_CREATE_POST, createPost);
}

export function* postsSagas() {
  yield all([call(onCreatePostStart)]);
}
