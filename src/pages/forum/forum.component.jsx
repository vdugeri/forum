import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SearchField from "../../components/search-field/search-field.component";
import Topic from "../../components/topic/topic.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import PopularTopics from "../../components/popular-topics/popular-topics.component";

import { selectTopicList } from "../../redux/topics/topics.selectors";

import categories from "./category.data";

import "./forum.styles.scss";

console.log(categories);

const Forum = ({ topics }) => (
  <div className="forum">
    <div className="forum__header">
      <div className="forum__header--tag">Community</div>
      <div className="forum__header--search">
        <SearchField placeholder="what are you looking for?" />
      </div>
    </div>
    <div className="forum__categories">
      {topics.map(topic => (
        <Topic topic={topic} key={topic.id} />
      ))}
    </div>
    <div className="forum__cta">
      <h2>Have a question of your own?</h2>
      <CustomButton primary>Write a post</CustomButton>
    </div>
    <div className="forum__popular">
      {categories.map((category, index) => (
        <PopularTopics category={category} key={index} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList
});

export default connect(mapStateToProps)(Forum);
