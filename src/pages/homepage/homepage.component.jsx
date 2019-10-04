import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import SearchField from "../../components/search-field/search-field.component";
import Topic from "../../components/topic/topic.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import PopularTopics from "../../components/popular-topics/popular-topics.component";

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
    <div className="homepage__cta">
      <h2>Have a question of your own?</h2>
      <Link to="/posts/create">
        <CustomButton primary>Write a post</CustomButton>
      </Link>
    </div>
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
