import messagesActionTypes from "./message.types";

const INITIAL_STATE = {
  messageList: [],
  error: null,
  currentMessage: null,
  isFetchingMessages: false
};

const messagesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case messagesActionTypes.START_FETCH_MESSAGES:
      return {
        ...state,
        isFetchingMessages: true
      };
    case messagesActionTypes.SET_CURRENT_MESSAGE:
      return {
        ...state,
        currentMessage: payload
      };
    default:
      return state;
  }
};

export default messagesReducer;
