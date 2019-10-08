import { createSelector } from "reselect";

const selectPost = state => state.posts;

export const selectCurrentPost = createSelector(
  [selectPost],
  posts => posts.currentPost
);

export const selectIsPostLoading = createSelector(
  [selectPost],
  posts => posts.isPostLoading
);
