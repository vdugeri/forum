import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TopicStrip from "components/topic-strip/topic-strip.component";
import CustomButton from "components/custom-button/custom-button.component";
import {
  DropdownHeading,
  DropdownFooter,
  DropdownWrapper
} from "components/topics-dropdown/topics-dropdown.styles";

import { selectTopicList } from "redux/topics/topics.selectors";
import { toggleTopicsDropdown } from "redux/topics/topics.actions";

const TopicsDropdown = ({ topics, history, toggleTopicsDropdown }) => {
  const goToPostPage = () => {
    toggleTopicsDropdown();
    history.push("/posts/create");
  };

  return (
    <DropdownWrapper onMouseLeave={toggleTopicsDropdown}>
      <DropdownHeading>Community</DropdownHeading>
      {topics.map(topic => (
        <TopicStrip topic={topic} key={topic._id} />
      ))}
      <DropdownFooter>
        <span>Have a question?</span>
        <CustomButton ghost onClick={goToPostPage}>
          Write a post
        </CustomButton>
      </DropdownFooter>
    </DropdownWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList
});

const mapDispatchToProps = dispatch => ({
  toggleTopicsDropdown: () => dispatch(toggleTopicsDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopicsDropdown));
