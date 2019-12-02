import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "utils/http-client";

import userActionTypes from "redux/user/user.types";
import {
  userSignInFailure,
  userSignInSuccess,
  userSignUpFailure,
  userSignUpSuccess,
  userSignoutFailure,
  userSignoutSuccess,
  updateUserAccountFailure,
  udpateUserAccountSuccess
} from "./user.actions";

export function* userSignIn({ payload }) {
  try {
    const endpoint = "/auth/login";
    const {
      data: { user }
    } = yield axios.post(endpoint, payload);
    yield put(userSignInSuccess(user));
  } catch (error) {
    yield put(userSignInFailure(error));
  }
}

export function* userSignUp({ payload }) {
  try {
    const endpoint = "/auth/signup";
    const {
      data: { user }
    } = yield axios.post(endpoint, payload);
    yield put(userSignUpSuccess(user));
  } catch (error) {
    yield put(userSignUpFailure(error));
  }
}

export function* userSignout() {
  try {
    yield put(userSignoutSuccess());
  } catch (error) {
    yield put(userSignoutFailure(error));
  }
}

export function* updateAccount({ payload }) {
  try {
    const { data } = yield axios.put(`/users/${payload._id}`, payload);

    yield put(udpateUserAccountSuccess(data));
  } catch (error) {
    yield put(updateUserAccountFailure(error));
  }
}

export function* onSignInStart() {
  yield takeLatest(userActionTypes.LOGIN_START, userSignIn);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, userSignUp);
}

export function* onSignoutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, userSignout);
}

export function* onUpdateUserAccount() {
  yield takeLatest(userActionTypes.UPDATE_USER_ACCOUNT_START, updateAccount);
}

export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onSignUpStart),
    call(onSignoutStart),
    call(onUpdateUserAccount)
  ]);
}
