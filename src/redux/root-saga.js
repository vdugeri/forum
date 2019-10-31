import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";
import { postsSagas } from "./posts/posts.sagas";
import { topicsSagas } from "./topics/topic.sagas";
import { messagesSagas } from "./messages/messages.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(postsSagas),
    call(topicsSagas),
    call(messagesSagas)
  ]);
}
