import { all, call, put, takeLatest } from "redux-saga/effects";

import messagesActionTypes from "redux/messages/message.types";
import axios from "utils/http-client";
import {
  sendMessageSuccess,
  sendMessageFailure,
  fetchMessagesFailure,
  fetchMessagesSuccess
} from "redux/messages/messages.actions";

export function* sendMessage({ payload }) {
  try {
    const endpoint = "/messages";
    const {
      data: { message }
    } = yield axios.post(endpoint, payload);
    yield put(sendMessageSuccess(message));
  } catch (error) {
    const {
      response: { data }
    } = error;
    yield put(sendMessageFailure(data));
  }
}

export function* fetchMessages({ payload }) {
  try {
    const endpoint = `/messages/${payload._id}`;
    const {
      data: { messages }
    } = yield axios.get(endpoint);
    yield put(fetchMessagesSuccess(messages));
  } catch (error) {
    const {
      response: { data }
    } = error;
    yield put(fetchMessagesFailure(data));
  }
}

export function* onStartSendMessage() {
  yield takeLatest(messagesActionTypes.START_SEND_MESSAGE, sendMessage);
}

export function* onFetchmessages() {
  yield takeLatest(messagesActionTypes.START_FETCH_MESSAGES, fetchMessages);
}

export function* messagesSagas() {
  yield all([call(onStartSendMessage), call(onFetchmessages)]);
}
