import postsActionTypes from "redux/posts/posts.types";

const INITIAL_STATE = {
  postList: [],
  userPosts: [],
  isPostLoading: false,
  isRepliesLoading: false,
  currentPost: null,
  error: null,
  postReplies: []
};

const postsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case postsActionTypes.START_CREATE_POST:
    case postsActionTypes.OPEN_POST_START:
    case postsActionTypes.FETCH_POSTS_START:
    case postsActionTypes.FETCH_USER_POSTS_START:
      return {
        ...state,
        isPostLoading: true
      };
    case postsActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        isPostLoading: false,
        error: null
      };
    case postsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        isPostLoading: false,
        postList: payload,
        error: null
      };
    case postsActionTypes.FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: payload,
        isPostLoading: false,
        error: null
      };
    case postsActionTypes.CREATE_POST_FAILURE:
    case postsActionTypes.OPEN_POST_FAILURE:
    case postsActionTypes.FETCH_POSTS_FAILURE:
    case postsActionTypes.FETCH_USER_POSTS_FAILURE:
      return {
        ...state,
        error: payload,
        isPostLoading: false
      };
    case postsActionTypes.OPEN_POST_SUCCESS:
      return {
        ...state,
        currentPost: payload,
        isPostLoading: false
      };
    case postsActionTypes.REPLY_CREATE_START:
    case postsActionTypes.REPLY_FETCH_START:
      return {
        ...state,
        isRepliesLoading: true
      };
    case postsActionTypes.REPLY_CREATE_SUCCESS:
      return {
        ...state,
        isRepliesLoading: false,
        currentPost: payload,
        error: null
      };
    case postsActionTypes.REPLY_FETCH_SUCCESS:
      return {
        ...state,
        postReplies: payload,
        isRepliesLoading: false,
        error: null
      };
    case postsActionTypes.REPLY_FETCH_FAILURE:
    case postsActionTypes.REPLY_CREATE_FAILURE:
      return {
        ...state,
        isRepliesLoading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default postsReducer;
