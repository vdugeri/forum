import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "utils/http-client";
import Notification from "utils/notification";

import userActionTypes from "redux/user/user.types";
import {
  userSignInFailure,
  userSignInSuccess,
  userSignUpFailure,
  userSignUpSuccess,
  userSignoutFailure,
  userSignoutSuccess,
  updateUserAccountFailure,
  udpateUserAccountSuccess,
} from "./user.actions";

export function* userSignIn({ payload }) {
  try {
    const endpoint = "/auth/login";
    const {
      data: { user },
      headers: { authorization },
    } = yield axios.post(endpoint, payload);

    const token = authorization.split(" ")[1];

    yield put(userSignInSuccess({ user, token }));
  } catch (error) {
    yield put(userSignInFailure(error));
    const { response } = error;
    const { data } = response || {
      data: { message: "Invalid username or password" },
    };

    Notification.open({ type: "error", message: data.message });
  }
}

export function* userSignUp({ payload: { userCreds } }) {
  try {
    const { data } = yield axios.post("/users", userCreds);
    yield put(userSignUpSuccess(data));
  } catch (error) {
    yield put(userSignUpFailure(error));
    const { response } = error;
    const { data } = response || { data: { message: "Registration failed" } };

    Notification.open({ type: "error", message: data.message });
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
    call(onUpdateUserAccount),
  ]);
}
