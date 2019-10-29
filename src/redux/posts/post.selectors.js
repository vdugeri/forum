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

export const selectPostList = createSelector(
  [selectPost],
  posts => posts.postList
);

export const selectUserPosts = createSelector(
  [selectPost],
  posts => posts.userPosts
);
