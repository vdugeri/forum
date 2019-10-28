import postsActionTypes from "./posts.types";

export const startPostCreate = postData => ({
  type: postsActionTypes.START_CREATE_POST,
  payload: postData
});

export const postCreateSuccess = post => ({
  type: postsActionTypes.CREATE_POST_SUCCESS,
  payload: post
});

export const postCreateFailure = error => ({
  type: postsActionTypes.CREATE_POST_FAILURE,
  payload: error
});

export const openPostStart = post => ({
  type: postsActionTypes.OPEN_POST_START,
  payload: post
});

export const openPostSuccess = post => ({
  type: postsActionTypes.OPEN_POST_SUCCESS,
  payload: post
});

export const openPostFailure = error => ({
  type: postsActionTypes.OPEN_POST_FAILURE,
  payload: error
});

export const toggleRegisterModal = () => ({
  type: postsActionTypes.TOGGLE_REGISTER_MODAL
});

export const startCreateReply = replyData => ({
  type: postsActionTypes.REPLY_CREATE_START,
  payload: replyData
});

export const createReplySuccess = reply => ({
  type: postsActionTypes.REPLY_CREATE_SUCCESS,
  payload: reply
});

export const createReplyFailure = error => ({
  type: postsActionTypes.CREATE_POST_FAILURE,
  payload: error
});

export const fetchPostsStart = topicId => ({
  type: postsActionTypes.FETCH_POSTS_START,
  payload: topicId
});

export const fetchPostsSuccess = posts => ({
  type: postsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFailure = error => ({
  type: postsActionTypes.FETCH_POSTS_FAILURE,
  payload: error
});

export const fetchUserPostsStart = userId => ({
  type: postsActionTypes.FETCH_USER_POSTS_START,
  payload: userId
});

export const fetchUserPostsSuccess = posts => ({
  type: postsActionTypes.FETCH_USER_POSTS_SUCCESS,
  payload: posts
});

export const fetchUserPostsFailure = error => ({
  type: postsActionTypes.FETCH_USER_POSTS_FAILURE,
  payload: error
});
