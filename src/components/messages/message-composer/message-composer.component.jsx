import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as PaperPlane } from "assets/icons/paperplane.svg";
import CustomTextArea from "components/shared/custom-textarea/custom-textarea.component";
import {
  ComposerContainer,
  ComposerInput,
  SendButton
} from "components/messages/message-composer/message-composer.styles";

import { startSendMessage } from "redux/messages/messages.actions";

import {
  selectCurrentMessage,
  selectMessageReciver
} from "redux/messages/messages.selectors";
import { selectCurrentUser } from "redux/user/user.selectors";

const MessageComposer = ({ currentMessage, currentUser, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleClick = e => {
    const newMessage = {
      receiver: currentMessage.sender,
      sender: currentUser.user._id,
      text: message
    };
    onSendMessage(newMessage);
  };

  return (
    <ComposerContainer>
      <ComposerInput>
        <CustomTextArea
          name="message"
          placeholder="Message here..."
          handleChange={handleChange}
          value={message}
        />
      </ComposerInput>
      <SendButton onClick={handleClick}>
        <PaperPlane />
      </SendButton>
    </ComposerContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentMessage: selectCurrentMessage,
  receiver: selectMessageReciver,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  onSendMessage: message => dispatch(startSendMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageComposer);
