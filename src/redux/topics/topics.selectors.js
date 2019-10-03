import { createSelector } from "reselect";

const selectTopics = state => state.topics;

export const selectIsOpen = createSelector(
  [selectTopics],
  topics => topics.isOpen
);

export const selectTopicList = createSelector(
  [selectTopics],
  topics => topics.topicList
);