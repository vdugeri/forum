import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Button, Box } from "components/shared";
import Editor from "components/editor/editor.component";
import { toggleModalStatus } from "redux/user/user.actions";
import { selectModalShown, selectCurrentUser } from "redux/user/user.selectors";
import { startCreateReply } from "redux/replies/actions";

const CreateReply = ({ post, onCreateReplyStart, currentUser }) => {
  const [reply, setReply] = useState({
    text: "",
    author: currentUser,
    post: post.id,
  });

  const handleChange = (e, editor) => {
    const value = editor.getData();

    setReply({ ...reply, text: value });
  };

  const handleSubmit = () => {
    onCreateReplyStart(reply);
    setReply({ ...reply, text: "" });
  };

  const { text } = reply;

  return (
    <Box>
      <Box>
        <Editor
          onChange={handleChange}
          value={text}
          placeholder="What's on your mind"
        />
      </Box>
      <Box pad="30px 0" rightAlign>
        <Button onClick={handleSubmit} primary>
          Reply to this post
        </Button>
      </Box>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  modalShown: selectModalShown,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleRegisterModal: () => dispatch(toggleModalStatus()),
  onCreateReplyStart: (replyData) => dispatch(startCreateReply(replyData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateReply);
