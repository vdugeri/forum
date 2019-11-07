import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "components/custom-button/custom-button.component";
import Editor from "components/editor/editor.component";

import { toggleModalStatus } from "../../redux/user/user.actions";
import { selectModalShown, selectCurrentUser } from "redux/user/user.selectors";
import { selectCurrentPost } from "redux/posts/post.selectors";
import { startCreateReply } from "redux/posts/posts.actions";

import "components/create-reply/create-reply.styles.scss";

const CreateReply = ({ currentPost, onCreateReplyStart, currentUser }) => {
  const [reply, setReply] = useState({
    text: "",
    author: currentUser.user,
    post: currentPost._id
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
      <CustomButton onClick={handleSubmit} primary>
        Reply to this post
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  modalShown: selectModalShown,
  currentPost: selectCurrentPost,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  toggleRegisterModal: () => dispatch(toggleModalStatus()),
  onCreateReplyStart: replyData => dispatch(startCreateReply(replyData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReply);
