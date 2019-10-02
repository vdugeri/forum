import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import userActionTypes from "./user.types";
import { userSignInFailure, userSignInSuccess } from "./user.actions";

const endpoint = "/auth/login";

export function* userSignIn({ payload }) {
  try {
    const res = yield axios.post(endpoint, payload);
    yield put(userSignInSuccess(res.data));
  } catch (error) {
    yield put(userSignInFailure(error));
  }
}

export function* onSignInStart() {
  yield takeLatest(userActionTypes.LOGIN_START, userSignIn);
}

export function* userSagas() {
  yield all([call(onSignInStart)]);
}
