import postsActionTypes from "redux/posts/posts.types";

/*********************************************
 *  Create Posts
 *********************************************/

export const startPostCreate = (postData) => ({
  type: postsActionTypes.START_CREATE_POST,
  payload: postData,
});

export const postCreateSuccess = (post) => ({
  type: postsActionTypes.CREATE_POST_SUCCESS,
  payload: post,
});

export const postCreateFailure = (error) => ({
  type: postsActionTypes.CREATE_POST_FAILURE,
  payload: error,
});

/*********************************************
 *  Open Posts
 *********************************************/

export const openPostStart = (postId) => ({
  type: postsActionTypes.OPEN_POST_START,
  payload: { postId },
});

export const openPostSuccess = (post) => ({
  type: postsActionTypes.OPEN_POST_SUCCESS,
  payload: post,
});

export const openPostFailure = (error) => ({
  type: postsActionTypes.OPEN_POST_FAILURE,
  payload: error,
});

export const toggleRegisterModal = () => ({
  type: postsActionTypes.TOGGLE_REGISTER_MODAL,
});

/*********************************************
 *  Fetch Posts
 *********************************************/

export const fetchPostsStart = (topicId) => ({
  type: postsActionTypes.FETCH_POSTS_START,
  payload: topicId,
});

export const fetchPostsSuccess = (posts) => ({
  type: postsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: postsActionTypes.FETCH_POSTS_FAILURE,
  payload: error,
});

/*********************************************
 *  User Posts
 *********************************************/

export const fetchUserPostsStart = (userId) => ({
  type: postsActionTypes.FETCH_USER_POSTS_START,
  payload: userId,
});

export const fetchUserPostsSuccess = (posts) => ({
  type: postsActionTypes.FETCH_USER_POSTS_SUCCESS,
  payload: posts,
});

export const fetchUserPostsFailure = (error) => ({
  type: postsActionTypes.FETCH_USER_POSTS_FAILURE,
  payload: error,
});

/*********************************************
 *  Delete Posts
 *********************************************/

export const deletePostStart = (postId) => ({
  type: postsActionTypes.DELETE_POST_START,
  payload: postId,
});

export const deletePostSuccess = () => ({
  type: postsActionTypes.DELETE_POST_SUCCESS,
});

export const deletePostFailure = (error) => ({
  type: postsActionTypes.DELETE_POST_FAILURE,
  payload: error,
});

/*********************************************
 *  Fetch Post replies
 *********************************************/
export const startFetchReplies = (postId) => ({
  type: postsActionTypes.START_FETCH_REPLIES,
  payload: { postId },
});

export const fetchPostRepliesSuccess = (replies) => ({
  type: postsActionTypes.FETCH_REPLIES_SUCCESS,
  payload: replies,
});

export const fetchPostRepliesFailure = (error) => ({
  type: postsActionTypes.FETCH_REPLIES_FAILURE,
  payload: error,
});
