import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SearchField from "../../components/search-field/search-field.component";
import Topic from "../../components/topic/topic.component";
import PopularTopics from "../../components/popular-topics/popular-topics.component";
import WritePost from "../../components/write-post/write-post.component";

import { selectTopicList } from "../../redux/topics/topics.selectors";

import categories from "./category.data";

import "./homepage.styles.scss";

const Homepage = ({ topics }) => (
  <div className="homepage">
    <div className="homepage__header">
      <div className="homepage__header--tag">Community</div>
      <div className="homepage__header--search">
        <SearchField placeholder="what are you looking for?" />
      </div>
    </div>
    <div className="homepage__categories">
      {topics.map(topic => (
        <Topic topic={topic} key={topic.id} />
      ))}
    </div>
    <WritePost />
    <div className="homepage__popular">
      {categories.map((category, index) => (
        <PopularTopics category={category} key={index} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList
});

export default connect(mapStateToProps)(Homepage);
