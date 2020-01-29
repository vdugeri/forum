import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import MessagePreview from "components/message-preview/message-preview.component";
import Message from "components/message/message.component";
import MessageComposer from "components/message-composer/message-composer.component";
import Quote from "components/quote/quote.component";

import {
  selectMessageList,
  selectCurrentMessage
} from "redux/messages/messages.selectors";
import { selectCurrentUser } from "redux/user/user.selectors";
import { startFetchMessages } from "redux/messages/messages.actions";

import "pages/messages/messages.styles.scss";

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
        {currentMessage ? <Message message={currentMessage} /> : <Quote />}

        {currentMessage && <MessageComposer />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
