import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  createReplySuccess,
  createReplyFailure,
  fetchReplySuccess,
  fetchReplyFailure,
} from "redux/replies/actions";
import httpClient from "utils/http-client";
import RepliesActionTypes from "./types";

const repliesEndpoint = "/replies";

function* replyToPost({ payload }) {
  try {
    const { data } = yield httpClient.post(repliesEndpoint, payload);
    yield put(createReplySuccess(data));
  } catch (error) {
    yield put(createReplyFailure(error));
  }
}

export function* fetchReplies({ payload }) {
  try {
    const endpoint = `/posts/${payload}/replies`;
    const {
      data: { replies },
    } = yield httpClient.get(endpoint);
    yield put(fetchReplySuccess(replies));
  } catch (error) {
    const {
      response: { data },
    } = error;
    yield put(fetchReplyFailure(data));
  }
}

function* onAddReply() {
  yield takeLatest(RepliesActionTypes.START_CREATE_REPLY, replyToPost);
}

export function* onFetchRepliesStart() {
  yield takeLatest(RepliesActionTypes.FETCH_REPLY_START, fetchReplies);
}

export function* repliesSagas() {
  yield all([call(onAddReply), call(onFetchRepliesStart)]);
}
