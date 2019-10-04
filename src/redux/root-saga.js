import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";
import { postsSagas } from "./posts/posts.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(postsSagas)]);
}
