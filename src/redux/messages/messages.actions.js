import messagesActionTypes from "redux/messages/message.types";

export const setCurrentMessage = message => ({
  type: messagesActionTypes.SET_CURRENT_MESSAGE,
  payload: message
});

export const startSendMessage = message => ({
  type: messagesActionTypes.START_SEND_MESSAGE,
  payload: message
});

export const sendMessageSuccess = message => ({
  type: messagesActionTypes.SEND_MESSAGE_SUCCESS,
  payload: message
});

export const sendMessageFailure = error => ({
  type: messagesActionTypes.SEND_MESSAGE_FAILURE,
  payload: error
});

export const startFetchMessages = user => ({
  type: messagesActionTypes.START_FETCH_MESSAGES,
  payload: user
});

export const fetchMessagesSuccess = messages => ({
  type: messagesActionTypes.FETCH_MESSAGES_SUCCESS,
  payload: messages
});

export const fetchMessagesFailure = error => ({
  type: messagesActionTypes.FETCH_MESSAGES_FAILURE,
  payload: error
});
