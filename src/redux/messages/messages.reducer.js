import messagesActionTypes from "redux/messages/message.types";

const INITIAL_STATE = {
  messageList: [],
  error: null,
  currentMessage: null,
  isFetchingMessages: false,
  receiver: null
};

const messagesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case messagesActionTypes.START_FETCH_MESSAGES:
    case messagesActionTypes.START_SEND_MESSAGE:
      return {
        ...state,
        isFetchingMessages: true
      };
    case messagesActionTypes.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messageList: payload,
        isFetchingMessages: false,
        error: null
      };
    case messagesActionTypes.SET_CURRENT_MESSAGE:
      return {
        ...state,
        currentMessage: payload
      };
    case messagesActionTypes.SEND_MESSAGE_FAILURE:
    case messagesActionTypes.FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        isFetchingMessages: false,
        error: payload
      };
    default:
      return state;
  }
};

export default messagesReducer;
