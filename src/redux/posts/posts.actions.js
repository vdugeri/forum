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
