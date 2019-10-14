import messagesActionTypes from "./message.types";

export const setCurrentMessage = message => ({
  type: messagesActionTypes.SET_CURRENT_MESSAGE,
  payload: message
});
