import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CustomInput from "components/shared/custom-input/custom-input.component";
import CustomButton from "components/shared/custom-button/custom-button.component";
import TopicSelect from "components/topics/topic-select/topic-select.component";
import RegisterModal from "components/auth/register-modal/register-modal.component";
import WithSpinner from "components/shared/with-spinner/with-spinner.component";
import Editor from "components/editor/editor.component";
import { Contain, Grid, Box, String, Gap } from "components/shared/form";
import { selectTopicList } from "redux/topics/topics.selectors";
import {
  selectModalShown,
  selectIsLoading,
  selectCurrentUser,
} from "redux/user/user.selectors";
import { startPostCreate } from "redux/posts/posts.actions";
import { toggleModalStatus } from "redux/user/user.actions";

import "pages/create-post/create-post.styles.scss";

const RegisterModalWithSpinner = WithSpinner(RegisterModal);

const CreatePost = ({
  topics,
  onStartPostCreate,
  modalShown,
  toggleModalStatus,
  isLoading,
  history,
}) => {
  const currentUser = useSelector(selectCurrentUser);

  const [postData, setPostData] = useState({
    author: currentUser,
    title: "",
    body: "",
    topicId: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    setPostData({ ...postData, [name]: value });
  };
  const handleEditorChange = (e, editor) => {
    setPostData({ ...postData, body: editor.getData() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      toggleModalStatus();
      return;
    }
    onStartPostCreate(postData);
    history.push("/dashboard/posts");
  };

  const { anon, title, body, topicId, author } = postData;
  return (
    <Contain wide width="100%">
      {modalShown && !currentUser ? (
        <RegisterModalWithSpinner isLoading={isLoading} />
      ) : null}
      <form onSubmit={handleSubmit} className="create-post">
        <String size="2.5rem">Write a post</String>
        <Gap height="20px" />
        <div className="create-post__author">
          <div className="create-post__author--details">
            <div className="create-post__author--image">
              {anon ? "?" : author ? author.firstName.substring(0, 1) : "#"}
            </div>
            <span>
              {anon ? (
                "Anonymous"
              ) : author ? (
                <span>{author.firstName}</span>
              ) : (
                <div className="add-user" onClick={toggleModalStatus}>
                  Add username
                </div>
              )}
            </span>
          </div>
        </div>
        <div className="create-post__post">
          <span>*Title of your post</span>
          <CustomInput
            label="What's on your mind?"
            handleChange={handleChange}
            type="text"
            name="title"
            value={title}
            required
            autoFocus
          />

          <span>What's going on?*</span>
          <Editor handleChange={handleEditorChange} value={body} />
          <span className="create-post__topics--heading">Add my post to*</span>
          <div className="create-post__topics">
            {topics.map((topic) => (
              <TopicSelect
                topic={topic}
                handleChange={handleChange}
                key={topic._id}
                value={topicId}
              />
            ))}
          </div>
        </div>
        <div className="create-post__button">
          <CustomButton primary>Post</CustomButton>
        </div>
      </form>
    </Contain>
  );
};

const mapStatetoProps = createStructuredSelector({
  topics: selectTopicList,
  currentUser: selectCurrentUser,
  modalShown: selectModalShown,
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onStartPostCreate: (postData) => dispatch(startPostCreate(postData)),
  toggleModalStatus: () => dispatch(toggleModalStatus()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withRouter(CreatePost));
