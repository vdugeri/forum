import { createSelector } from "reselect";

const repliesSelector = (state) => state.replies;

export const selectReplies = createSelector(
  [repliesSelector],
  (replies) => replies.replies
);

export const selectRepliesLoading = createSelector(
  [repliesSelector],
  (replies) => replies.loading
);
