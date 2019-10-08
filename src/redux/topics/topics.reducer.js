import topicActionTypes from "./topics.types";
import topicsData from "./topics.data";

const INITIAL_STATE = {
  topicList: topicsData,
  currentTopic: null,
  isOpen: false
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
    default:
      return state;
  }
};

export default topicsReducer;
