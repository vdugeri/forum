import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  toggleTopicsDropdown,
  setCurrentTopic
} from "redux/topics/topics.actions";

import "components/topic-strip/topic-strip.styles.scss";

const TopicStrip = ({ topic }) => {
  const dispatch = useDispatch();
  return (
    <div className="topic-strip">
      <Link
        onClick={() => {
          dispatch(toggleTopicsDropdown());
          dispatch(setCurrentTopic(topic));
        }}
        to={`${topic.linkUrl}`}
      >
        <span className="topic-strip__name">{topic.name}</span>
        <span className="topic-strip__icon">
          <img src={topic.icon} alt={topic.name} />
        </span>
      </Link>
    </div>
  );
};

export default TopicStrip;
