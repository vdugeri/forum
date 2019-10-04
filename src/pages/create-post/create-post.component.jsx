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
  selectIsLoading
} from "../../redux/user/user.selectors";
import { startPostCreate } from "../../redux/posts/posts.actions";
import { toggleModalStatus } from "../../redux/user/user.actions";

import "./create-post.styles.scss";

const RegisterModalWithSpinner = WithSpinner(RegisterModal);

const CreatePost = ({
  topics,
  onStartPostCreate,
  modalShown,
  toggleModalStatus,
  isLoading
}) => {
  const [postData, setPostData] = useState({
    anon: false,
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
    onStartPostCreate(postData);
  };

  const { anon, title, body, topicId } = postData;

  return (
    <React.Fragment>
      {modalShown ? <RegisterModalWithSpinner isLoading={isLoading} /> : null}
      <form onSubmit={handleSubmit} className="create-post">
        <h2>Write a post</h2>
        <div className="create-post__author">
          <div className="create-post__author--details">
            <div className="create-post__author--image">{anon ? "?" : `#`}</div>
            <span>
              {anon ? (
                "Anonymous"
              ) : (
                <div className="add-user" onClick={toggleModalStatus}>
                  Add username
                </div>
              )}
            </span>
          </div>
          <div className="create-post__author--anon">
            <CustomCheckbox
              label="Post anonymously"
              handleChange={handleChange}
              name="anon"
              value={anon}
            />
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
                key={topic.id}
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
