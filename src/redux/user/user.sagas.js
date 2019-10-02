import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import userActionTypes from "./user.types";
import {
  userSignInFailure,
  userSignInSuccess,
  userSignUpFailure,
  userSignUpSuccess
} from "./user.actions";

const endpoint = "/auth/login";

export function* userSignIn({ payload }) {
  try {
    const res = yield axios.post(endpoint, payload);
    yield put(userSignInSuccess(res.data));
  } catch (error) {
    yield put(userSignInFailure(error));
  }
}

export function* userSignUp({ payload }) {
  try {
    const res = yield axios.post(endpoint, payload);
    yield put(userSignUpSuccess(res.data));
  } catch (error) {
    yield put(userSignUpFailure(error));
  }
}

export function* onSignInStart() {
  yield takeLatest(userActionTypes.LOGIN_START, userSignIn);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, userSignUp);
}

export function* userSagas() {
  yield all([call(onSignInStart), call(onSignUpStart)]);
}
