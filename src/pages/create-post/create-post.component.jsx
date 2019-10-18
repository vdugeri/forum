import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomTextarea from "../../components/custom-textarea/custom-textarea.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import TopicSelect from "../../components/topic-select/topic-select.component";
import CustomCheckbox from "../../components/custom-checkbox/custom-checkbox.component";
import RegisterModal from "../../components/register-modal/register-modal.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { selectTopicList } from "../../redux/topics/topics.selectors";
import {
  selectModalShown,
  selectIsLoading,
  selectCurrentUser
} from "../../redux/user/user.selectors";
import { startPostCreate } from "../../redux/posts/posts.actions";
import { toggleModalStatus } from "../../redux/user/user.actions";

import "./create-post.styles.scss";

const RegisterModalWithSpinner = WithSpinner(RegisterModal);

const CreatePost = ({
  topics,
  currentUser,
  onStartPostCreate,
  modalShown,
  toggleModalStatus,
  isLoading
}) => {
  const [postData, setPostData] = useState({
    author: currentUser,
    title: "",
    body: "",
    topicId: ""
  });

  const handleChange = e => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!currentUser) {
      toggleModalStatus();
      return;
    }
    onStartPostCreate(postData);
  };

  const { anon, title, body, topicId, author } = postData;
  return (
    <React.Fragment>
      {modalShown ? <RegisterModalWithSpinner isLoading={isLoading} /> : null}
      <form onSubmit={handleSubmit} className="create-post">
        <h2>Write a post</h2>
        <div className="create-post__author">
          <div className="create-post__author--details">
            <div className="create-post__author--image">
              {anon
                ? "?"
                : author
                ? author.user.firstName.substring(0, 1)
                : "#"}
            </div>
            <span>
              {anon ? (
                "Anonymous"
              ) : author ? (
                <span>{author.user.firstName}</span>
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
          <CustomTextarea
            label="Add details here"
            handleChange={handleChange}
            type="text"
            name="body"
            value={body}
            rows="5"
            required
          />
          <span className="create-post__topics--heading">Add my post to*</span>
          <div className="create-post__topics">
            {topics.map(topic => (
              <TopicSelect
                topic={topic}
                handleChange={handleChange}
                key={topic._id}
                value={topicId}
              />
            ))}
          </div>
        </div>
        <CustomButton primary>Post</CustomButton>
      </form>
    </React.Fragment>
  );
};

const mapStatetoProps = createStructuredSelector({
  topics: selectTopicList,
  currentUser: selectCurrentUser,
  modalShown: selectModalShown,
  isLoading: selectIsLoading
});

const mapDispatchToProps = dispatch => ({
  onStartPostCreate: postData => dispatch(startPostCreate(postData)),
  toggleModalStatus: () => dispatch(toggleModalStatus())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(CreatePost);
