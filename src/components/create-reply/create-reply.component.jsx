import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Editor } from "@tinymce/tinymce-react";

import CustomTextarea from "../custom-textarea/custom-textarea.component";
import CustomButton from "../custom-button/custom-button.component";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";

import { toggleModalStatus } from "../../redux/user/user.actions";
import { selectModalShown } from "../../redux/user/user.selectors";
import { selectCurrentPost } from "../../redux/posts/post.selectors";
import { startCreateReply } from "../../redux/posts/posts.actions";

import { EDITOR_API_KEY } from "../../config";

import "./create-reply.styles.scss";

const CreateReply = ({ currentPost, onCreateReplyStart }) => {
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
  const { text } = reply;
  return (
    <div className="create-reply" id="reply">
      <div className="create-reply__author">
        <div className="create-reply__author--image"></div>
      </div>
      <div className="create-reply__field">
        <Editor
          apiKey={EDITOR_API_KEY}
          height={300}
          init={{
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks fullscreen codesample",
              "insertdatetime media table paste help wordcount"
            ],
            toolbar: `undo redo | formatselect | bold italic backcolor | 
             alignleft aligncenter alignright alignjustify | 
             bullist numlist outdent indent | removeformat | help | codesample`
          }}
        />
        {/* <CustomTextarea
          rows="6"
          name="text"
          value={text}
          handleChange={handleChange}
          label="Write your reply..."
        /> */}
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
