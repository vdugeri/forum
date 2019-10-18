import topicActionTypes from "./topics.types";

const INITIAL_STATE = {
  topicList: [],
  currentTopic: null,
  isOpen: false,
  isFetchingTopics: false,
  error: null
};

const topicsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case topicActionTypes.TOGGLE_TOPIC_DROPDOWN:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case topicActionTypes.SET_CURRENT_TOPIC:
      return {
        ...state,
        currentTopic: payload
      };
    case topicActionTypes.START_FETCH_TOPICS:
      return {
        ...state,
        isFetchingTopics: true
      };
    case topicActionTypes.FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        topicList: payload,
        isFetchingTopics: false
      };
    case topicActionTypes.FETCH_TOPICS_FAILURE:
      return {
        ...state,
        error: payload,
        isFetchingTopics: false
      };
    default:
      return state;
  }
};

export default topicsReducer;
