import postsActionTypes from "redux/posts/posts.types";

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

export const createReplySuccess = postWithReplies => ({
  type: postsActionTypes.REPLY_CREATE_SUCCESS,
  payload: postWithReplies
});

export const createReplyFailure = error => ({
  type: postsActionTypes.CREATE_POST_FAILURE,
  payload: error
});

export const startFetchReply = postId => ({
  type: postsActionTypes.REPLY_FETCH_START,
  payload: postId
});

export const fetchReplySuccess = replies => ({
  type: postsActionTypes.REPLY_FETCH_SUCCESS,
  payload: replies
});

export const fetchReplyFailure = error => ({
  type: postsActionTypes.REPLY_FETCH_FAILURE,
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

export const deletePostStart = postId => ({
  type: postsActionTypes.DELETE_POST_START,
  payload: postId
});

export const deletePostSuccess = () => ({
  type: postsActionTypes.DELETE_POST_SUCCESS
});

export const deletePostFailure = error => ({
  type: postsActionTypes.DELETE_POST_FAILURE,
  payload: error
});
