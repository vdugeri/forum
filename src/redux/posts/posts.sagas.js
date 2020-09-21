import { all, call, put, takeLatest } from "redux-saga/effects";
import httpClient from "utils/http-client";

import postsActionTypes from "redux/posts/posts.types";
import {
  postCreateSuccess,
  postCreateFailure,
  openPostSuccess,
  openPostFailure,
  fetchPostsFailure,
  fetchPostsSuccess,
  fetchUserPostsFailure,
  fetchUserPostsSuccess,
  deletePostFailure,
  deletePostSuccess,
  fetchPostRepliesFailure,
  fetchPostRepliesSuccess,
} from "redux/posts/posts.actions";

let endpoint = "/posts";

function* createPost({ payload }) {
  try {
    const { data } = yield httpClient.post(endpoint, payload);
    yield put(postCreateSuccess(data));
  } catch (error) {
    yield put(postCreateFailure(error));
  }
}

function* getPost({ payload: { postId } }) {
  try {
    const { data } = yield httpClient.get(`/posts/${postId}`);
    yield put(openPostSuccess(data));
  } catch (error) {
    yield put(openPostFailure(error));
  }
}

function* fetchPosts({ payload }) {
  try {
    endpoint = `/topics/${payload}/posts`;
    const {
      data: { posts },
    } = yield httpClient.get(endpoint);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

function* fetchUserPosts({ payload }) {
  try {
    const endpoint = `/users/${payload}/posts`;
    const {
      data: { posts },
    } = yield httpClient.get(endpoint);
    yield put(fetchUserPostsSuccess(posts));
  } catch (error) {
    yield put(fetchUserPostsFailure(error));
  }
}

function* deletePost({ payload }) {
  try {
    const endpoint = `/posts/${payload}`;
    yield httpClient.delete(endpoint);
    yield put(deletePostSuccess());
  } catch (error) {
    yield put(deletePostFailure(error));
  }
}

function* fetchReplies({ payload: { postId } }) {
  try {
    const { data } = yield httpClient.get(`/posts/${postId}/replies`);
    yield put(fetchPostRepliesSuccess(data));
  } catch (error) {
    yield put(fetchPostRepliesFailure(error));
  }
}

function* onCreatePost() {
  yield takeLatest(postsActionTypes.START_CREATE_POST, createPost);
}

function* onOpenPost() {
  yield takeLatest(postsActionTypes.OPEN_POST_START, getPost);
}

function* onFetchPosts() {
  yield takeLatest(postsActionTypes.FETCH_POSTS_START, fetchPosts);
}

function* onFetchUserPosts() {
  yield takeLatest(postsActionTypes.FETCH_USER_POSTS_START, fetchUserPosts);
}

function* onDeletePost() {
  yield takeLatest(postsActionTypes.DELETE_POST_START, deletePost);
}

function* onFetchReplies() {
  yield takeLatest(postsActionTypes.START_FETCH_REPLIES, fetchReplies);
}

export function* postsSagas() {
  yield all([
    call(onCreatePost),
    call(onOpenPost),
    call(onFetchPosts),
    call(onFetchUserPosts),
    call(onDeletePost),
    call(onFetchReplies),
  ]);
}
