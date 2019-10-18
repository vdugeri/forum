import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "../../utils/http-client";

import postsActionTypes from "./posts.types";
import {
  postCreateSuccess,
  postCreateFailure,
  openPostSuccess,
  openPostFailure,
  createReplyFailure,
  createReplySuccess,
  fetchPostsFailure,
  fetchPostsSuccess
} from "./posts.actions";

let endpoint = "/posts";
const repliesEndpoint = "/replies";

export function* createPost({ payload }) {
  try {
    const { data } = yield axios.post(endpoint, payload);
    yield put(postCreateSuccess(data));
  } catch (error) {
    yield put(postCreateFailure(error));
  }
}

export function* openPost({ payload }) {
  try {
    yield put(openPostSuccess(payload));
  } catch (error) {
    yield put(openPostFailure(error));
  }
}

export function* replyToPost({ payload }) {
  try {
    const { data } = yield axios.post(repliesEndpoint, payload);
    yield put(createReplySuccess(data));
  } catch (error) {
    yield put(createReplyFailure(error));
  }
}

export function* fetchPosts({ payload }) {
  try {
    endpoint = `/topics/${payload}/posts`;
    const { data } = yield axios.get(endpoint);
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

export function* onCreatePostStart() {
  yield takeLatest(postsActionTypes.START_CREATE_POST, createPost);
}

export function* onOpenPostStart() {
  yield takeLatest(postsActionTypes.OPEN_POST_START, openPost);
}

export function* onAddReply() {
  yield takeLatest(postsActionTypes.REPLY_CREATE_START, replyToPost);
}

export function* onFetchPosts() {
  yield takeLatest(postsActionTypes.FETCH_POSTS_START, fetchPosts);
}

export function* postsSagas() {
  yield all([
    call(onCreatePostStart),
    call(onOpenPostStart),
    call(onAddReply),
    call(onFetchPosts)
  ]);
}
