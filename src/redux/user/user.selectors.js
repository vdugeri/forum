import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectModalShown = createSelector(
  [selectUser],
  user => user.modalShown
);
