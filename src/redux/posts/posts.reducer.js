import postsActionTypes from "redux/posts/posts.types";
import RepliesActionTypes from "redux/replies/types";

const INITIAL_STATE = {
  postList: [],
  userPosts: [],
  isPostLoading: false,
  isRepliesLoading: false,
  currentPost: { author: {} },
  error: null,
  postReplies: { data: [] },
};

const postsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case postsActionTypes.START_CREATE_POST:
    case postsActionTypes.OPEN_POST_START:
    case postsActionTypes.FETCH_POSTS_START:
    case postsActionTypes.FETCH_USER_POSTS_START:
    case postsActionTypes.DELETE_POST_START:
      return {
        ...state,
        isPostLoading: true,
      };
    case postsActionTypes.REPLY_CREATE_START:
    case postsActionTypes.START_FETCH_REPLIES:
      return {
        ...state,
        isRepliesLoading: true,
        error: null,
      };
    case postsActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        isPostLoading: false,
        error: null,
      };
    case postsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        isPostLoading: false,
        postList: payload,
        error: null,
      };
    case postsActionTypes.FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: payload,
        isPostLoading: false,
        error: null,
      };
    case RepliesActionTypes.CREATE_REPLY_SUCCESS:
      return {
        ...state,
        postReplies: updatePostReplies(state.postReplies, payload),
      };
    case postsActionTypes.OPEN_POST_SUCCESS:
      return {
        ...state,
        currentPost: payload,
        isPostLoading: false,
      };
    case postsActionTypes.REPLY_CREATE_SUCCESS:
      return {
        ...state,
        isRepliesLoading: false,
        currentPost: payload,
        error: null,
      };
    case postsActionTypes.FETCH_REPLIES_SUCCESS:
      return {
        ...state,
        postReplies: payload,
        isRepliesLoading: false,
      };
    case postsActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        isPostLoading: false,
      };

    case postsActionTypes.CREATE_POST_FAILURE:
    case postsActionTypes.OPEN_POST_FAILURE:
    case postsActionTypes.FETCH_POSTS_FAILURE:
    case postsActionTypes.FETCH_USER_POSTS_FAILURE:
    case postsActionTypes.DELETE_POST_FAILURE:
      return {
        ...state,
        error: payload,
        isPostLoading: false,
      };
    case postsActionTypes.FETCH_REPLIES_FAILURE:
    case postsActionTypes.REPLY_CREATE_FAILURE:
      return {
        ...state,
        isRepliesLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

function updatePostReplies(replies, reply) {
  const updatedReplies = { ...replies, data: [...replies.data, reply] };

  return { ...updatedReplies };
}

export default postsReducer;
