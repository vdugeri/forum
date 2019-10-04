import postsActionTypes from "./posts.types";
import { addPostToList } from "./posts.utils";

const INITIAL_STATE = {
  postList: [],
  isPostLoading: false,
  error: null
};

const postsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case postsActionTypes.START_CREATE_POST:
      return {
        ...state,
        isPostLoading: true
      };
    case postsActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        postList: addPostToList(state, payload),
        error: null
      };
    case postsActionTypes.CREATE_POST_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default postsReducer;
