import { createSelector } from "reselect";

const selectMessages = state => state.messages;

export const selectMessageList = createSelector(
  [selectMessages],
  messages => messages.messageList
);

export const selectCurrentMessage = createSelector(
  [selectMessages],
  messages => messages.currentMessage
);

export const selectMessageReciver = createSelector(
  [selectMessages],
  messages => messages.receiver
);
