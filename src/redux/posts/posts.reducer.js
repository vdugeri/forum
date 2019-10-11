import postsActionTypes from "./posts.types";
import {
  addPostToList,
  selectPost,
  getPostList,
  addReplyToPost
} from "./posts.utils";

const INITIAL_STATE = {
  postList: getPostList(),
  isPostLoading: false,
  currentPost: null,
  error: null
};

const postsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case postsActionTypes.START_CREATE_POST:
    case postsActionTypes.OPEN_POST_START:
    case postsActionTypes.FETCH_POSTS_START:
      return {
        ...state,
        isPostLoading: true
      };
    case postsActionTypes.CREATE_POST_SUCCESS:
    case postsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postList: addPostToList(state, payload),
        isPostLoading: false,
        error: null
      };
    case postsActionTypes.CREATE_POST_FAILURE:
    case postsActionTypes.OPEN_POST_FAILURE:
    case postsActionTypes.REPLY_CREATE_FAILURE:
    case postsActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: payload,
        isPostLoading: false
      };
    case postsActionTypes.OPEN_POST_SUCCESS:
      return {
        ...state,
        currentPost: selectPost(state.postList, payload),
        isPostLoading: false
      };
    case postsActionTypes.REPLY_CREATE_SUCCESS:
      return {
        ...state,
        currentPost: addReplyToPost(state.currentPost, payload)
      };
    default:
      return state;
  }
};

export default postsReducer;
