import topicActionTypes from "redux/topics/topics.types";

export const toggleTopicsDropdown = () => ({
  type: topicActionTypes.TOGGLE_TOPIC_DROPDOWN
});

export const setCurrentTopic = topic => ({
  type: topicActionTypes.SET_CURRENT_TOPIC,
  payload: topic
});

export const startFetchTopics = () => ({
  type: topicActionTypes.START_FETCH_TOPICS
});

export const fetchTopicsSuccess = topics => ({
  type: topicActionTypes.FETCH_TOPICS_SUCCESS,
  payload: topics
});

export const fetchTopicsFailure = error => ({
  type: topicActionTypes.FETCH_TOPICS_FAILURE,
  payload: error
});
