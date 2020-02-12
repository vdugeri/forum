import { takeLatest, all, put, call } from "redux-saga/effects";
import adminActionTypes from "./admin.types";
import { userSignInFailure, userSignInSuccess } from "redux/user/user.actions";
import axios from "utils/http-client";

function* adminLogin(payload) {
  try {
    const { data } = yield axios.post("/admin/login", payload);
    yield put(userSignInSuccess(data));
  } catch (error) {
    yield put(userSignInFailure(error));
  }
}

function* onAdminLogin() {
  yield takeLatest(adminActionTypes.ADMIN_LOG_IN, adminLogin);
}

export function* adminSagas() {
  yield all([call(onAdminLogin)]);
}
