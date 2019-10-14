import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import MessagePreview from "../../components/message-preview/message-preview.component";
import Message from "../../components/message/message.component";

import {
  selectMessageList,
  selectCurrentMessage
} from "../../redux/messages/messages.selectors";

import "./messages.styles.scss";

const Messages = ({ receivedMessages, currentMessage }) => (
  <div className="messages">
    <div className="messages__preview-area">
      {receivedMessages.map(message => (
        <MessagePreview message={message} key={message.id} />
      ))}
    </div>
    <div className="messages__message-area">
      {currentMessage ? <Message message={currentMessage} /> : null}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  receivedMessages: selectMessageList,
  currentMessage: selectCurrentMessage
});

export default connect(mapStateToProps)(Messages);
