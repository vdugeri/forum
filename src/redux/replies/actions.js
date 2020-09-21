import RepliesActionTypes from "redux/replies/types";

export const startCreateReply = (replyData) => ({
  type: RepliesActionTypes.START_CREATE_REPLY,
  payload: replyData,
});

export const createReplySuccess = (reply) => ({
  type: RepliesActionTypes.CREATE_REPLY_SUCCESS,
  payload: reply,
});

export const createReplyFailure = (error) => ({
  type: RepliesActionTypes.CREATE_REPLY_FAILURE,
  payload: error,
});

export const startFetchReply = (postId) => ({
  type: RepliesActionTypes.FETCH_REPLY_START,
  payload: postId,
});

export const fetchReplySuccess = (replies) => ({
  type: RepliesActionTypes.FETCH_REPLY_SUCCESS,
  payload: replies,
});

export const fetchReplyFailure = (error) => ({
  type: RepliesActionTypes.FETCH_REPLY_FAILURE,
  payload: error,
});
