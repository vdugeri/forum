import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SearchField from "../../components/search-field/search-field.component";
import Topic from "../../components/topic/topic.component";
import PopularTopics from "../../components/popular-topics/popular-topics.component";
import WritePost from "../../components/write-post/write-post.component";
// import ExplorePractitioners from "../../components/explore-practitioners/explore-practitioners.component";

import { selectTopicList } from "../../redux/topics/topics.selectors";
import { startFetchTopics } from "../../redux/topics/topics.actions";

import "./homepage.styles.scss";

const Homepage = ({ topics }) => {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="homepage__header--tag">Community</div>
        <div className="homepage__header--search">
          <SearchField placeholder="what are you looking for?" />
        </div>
      </div>
      <div className="homepage__categories">
        {topics.map(topic => (
          <Topic topic={topic} key={topic._id} />
        ))}
      </div>
      <WritePost />
      <div className="homepage__popular">
        {topics.map(topic => (
          <PopularTopics topic={topic} key={topic._id} />
        ))}
      </div>

      {/* <ExplorePractitioners topExperts={users.topExperts} /> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList
});

const mapDispatchToProps = dispatch => ({
  onFetchTopicsStart: () => dispatch(startFetchTopics())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
