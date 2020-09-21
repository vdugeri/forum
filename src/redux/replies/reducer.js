import RepliesActionTypes from "redux/replies/types";

const initialState = {
  loading: false,
  error: null,
};

function repliesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case RepliesActionTypes.START_CREATE_REPLY:
    case RepliesActionTypes.FETCH_REPLY_START:
      return {
        ...state,
        loading: true,
      };
    case RepliesActionTypes.CREATE_REPLY_SUCCESS:
    case RepliesActionTypes.FETCH_REPLY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RepliesActionTypes.CREATE_REPLY_FAILURE:
    case RepliesActionTypes.FETCH_REPLY_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}

export default repliesReducer;
