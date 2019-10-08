import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomTextarea from "../custom-textarea/custom-textarea.component";
import CustomButton from "../custom-button/custom-button.component";
import RegisterModal from "../register-modal/register-modal.component";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";

import { toggleModalStatus } from "../../redux/user/user.actions";
import { selectModalShown } from "../../redux/user/user.selectors";
import { selectCurrentPost } from "../../redux/posts/post.selectors";
import { startCreateReply } from "../../redux/posts/posts.actions";

import "./create-reply.styles.scss";

const CreateReply = ({
  modalShown,
  toggleRegisterModal,
  currentPost,
  onCreateReplyStart
}) => {
  const [reply, setReply] = useState({
    text: "",
    user: "",
    postId: currentPost.id,
    anon: false
  });
  const handleChange = e => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    setReply({ ...reply, [name]: value });
  };
  const handleSubmit = () => {
    onCreateReplyStart(reply);
  };
  const { anon, text } = reply;
  return (
    <div className="create-reply" id="reply">
      {modalShown ? <RegisterModal /> : null}

      <div className="create-reply__author">
        <div className="create-reply__author--image">{anon ? "?" : "#"}</div>
        {anon ? (
          <div className="create-reply__author--username anon">Anonymous</div>
        ) : (
          <div
            className="create-reply__author--username"
            onClick={toggleRegisterModal}
          >
            Add username
          </div>
        )}
        <div className="create-reply__author--anon">
          <CustomCheckbox
            handleChange={handleChange}
            label="Post anonymously"
            name="anon"
          />
        </div>
      </div>
      <div className="create-reply__field">
        <CustomTextarea
          rows="6"
          name="text"
          value={text}
          handleChange={handleChange}
        />
      </div>
      <CustomButton onClick={handleSubmit} primary>
        Reply to this post
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  modalShown: selectModalShown,
  currentPost: selectCurrentPost
});

const mapDispatchToProps = dispatch => ({
  toggleRegisterModal: () => dispatch(toggleModalStatus()),
  onCreateReplyStart: replyData => dispatch(startCreateReply(replyData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReply);
