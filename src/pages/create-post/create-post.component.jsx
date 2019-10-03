import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import TopicSelect from "../../components/topic-select/topic-select.component";

import { selectTopicList } from "../../redux/topics/topics.selectors";

import "./create-post.styles.scss";

const CreatePost = ({ topics }) => {
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  return (
    <div className="create-post">
      <h2>Write a post</h2>
      <div className="create-post__author">
        <div className="create-post__author--details">
          <div className="create-post__author--image">#</div>
          <span>Add username</span>
        </div>
        <div className="create-post__author--anon">
          <span>Post anonymously</span>
          <input type="checkbox" />
        </div>
      </div>
      <div className="create-post__post">
        <span>*Title of your post</span>
        <CustomInput label="What's on your mind?" />

        <span>What's going on?*</span>
        <CustomInput label="Add details here" />
        <span className="create-post__topics--heading">Add my post to*</span>
        <div className="create-post__topics">
          {topics.map(topic => (
            <TopicSelect
              topic={topic}
              handleChange={handleChange}
              key={topic.id}
            />
          ))}
        </div>
      </div>
      <CustomButton primary>Post</CustomButton>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  topics: selectTopicList
});

export default connect(mapStatetoProps)(CreatePost);
