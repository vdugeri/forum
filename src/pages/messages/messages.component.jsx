import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import MessagePreview from "../../components/message-preview/message-preview.component";
import Message from "../../components/message/message.component";
import MessageComposer from "../../components/message-composer/message-compose.component";

import {
  selectMessageList,
  selectCurrentMessage
} from "../../redux/messages/messages.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { startFetchMessages } from "../../redux/messages/messages.actions";

import "./messages.styles.scss";

const Messages = ({
  userMessages,
  currentMessage,
  currentUser,
  onFetchMessages
}) => {
  useEffect(() => {
    onFetchMessages(currentUser.user);
  }, [currentUser, onFetchMessages]);
  return (
    <div className="messages">
      <div className="messages__preview-area">
        {userMessages.map(message => (
          <MessagePreview message={message} key={message._id} />
        ))}
      </div>
      <div className="messages__message-area">
        <div className="messages__message-area--body">
          {currentMessage ? <Message message={currentMessage} /> : null}
        </div>
        {currentMessage ? (
          <div className="messages__message-area--composer">
            <MessageComposer />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userMessages: selectMessageList,
  currentMessage: selectCurrentMessage,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  onFetchMessages: user => dispatch(startFetchMessages(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
