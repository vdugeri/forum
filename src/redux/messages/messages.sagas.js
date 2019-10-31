import { all, call, put, takeLatest } from "redux-saga/effects";

import messagesActionTypes from "./message.types";
import axios from "../../utils/http-client";
import {
  sendMessageSuccess,
  sendMessageFailure,
  fetchMessagesFailure,
  fetchMessagesSuccess
} from "./messages.actions";

export function* sendMessage({ payload }) {
  try {
    const endpoint = "/messages";
    const {
      data: { message }
    } = yield axios.post(endpoint, payload);
    yield put(sendMessageSuccess(message));
  } catch (error) {
    yield put(sendMessageFailure(error));
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
    yield put(fetchMessagesFailure(error));
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
