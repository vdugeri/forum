import { takeLatest, all, put, call } from "redux-saga/effects";
import adminActionTypes from "./admin.types";
import { userSignInFailure, userSignInSuccess } from "redux/user/user.actions";
import axios from "utils/http-client";

function* adminLogin({ payload }) {
  try {
    const {
      data: { user },
      headers: { authorization },
    } = yield axios.post("/auth/login", payload);
    const token = authorization.split(" ")[1];
    yield put(userSignInSuccess({ user, token }));
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
