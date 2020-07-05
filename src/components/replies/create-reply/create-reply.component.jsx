import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Button } from "components/shared";
import Editor from "components/editor/editor.component";

import { toggleModalStatus } from "redux/user/user.actions";
import { selectModalShown, selectCurrentUser } from "redux/user/user.selectors";
import { startCreateReply } from "redux/posts/posts.actions";

import "components/replies/create-reply/create-reply.styles.scss";

const CreateReply = ({ post, onCreateReplyStart, currentUser }) => {
  const [reply, setReply] = useState({
    text: "",
    author: currentUser ? currentUser.user : null,
    post: post._id,
  });
  const handleChange = (e, editor) => {
    const value = editor.getData();
    setReply({ ...reply, text: value });
  };
  const handleSubmit = () => {
    onCreateReplyStart(reply);
  };
  const { text } = reply;
  return (
    <div className="create-reply" id="reply">
      <div className="create-reply__field">
        <Editor handleChange={handleChange} value={text} />
      </div>
      <Button onClick={handleSubmit} primary>
        Reply to this post
      </Button>
    </div>
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
