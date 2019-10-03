import React from "react";
import { connect } from "react-redux";
import { createStructureSelector } from "reselect";

import "./topic-select.styles.scss";

const TopicSelect = ({ topic, handleChange }) => {
  return (
    <div className="topic-select">
      <div className="topic-select__radio-group">
        <input
          type="radio"
          name="post-topic"
          className="topic-select__radio-input"
          id={topic.id}
          onChange={handleChange}
          value={topic.id}
        />
        <label htmlFor={topic.id} className="topic-select__radio-label">
          <div className="topic-select__radio-button"></div>
          {topic.name}
        </label>
      </div>
    </div>
  );
};

export default TopicSelect;
