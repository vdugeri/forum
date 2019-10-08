import topicActionTypes from "./topics.types";

export const toggleTopicsDropdown = () => ({
  type: topicActionTypes.TOGGLE_TOPIC_DROPDOWN
});

export const setCurrentTopic = topic => ({
  type: topicActionTypes.SET_CURRENT_TOPIC,
  payload: topic
});
