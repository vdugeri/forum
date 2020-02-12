import { all, call } from "redux-saga/effects";

import { userSagas } from "redux/user/user.sagas";
import { postsSagas } from "redux/posts/posts.sagas";
import { topicsSagas } from "redux/topics/topic.sagas";
import { messagesSagas } from "redux/messages/messages.sagas";
import { expertsSagas } from "redux/experts/experts.sagas";
import { adminSagas } from "redux/admin/admin.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(postsSagas),
    call(topicsSagas),
    call(messagesSagas),
    call(expertsSagas),
    call(adminSagas)
  ]);
}
