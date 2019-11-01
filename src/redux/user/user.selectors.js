import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectModalShown = createSelector(
  [selectUser],
  user => user.modalShown
);

export const selectIsLoading = createSelector(
  [selectUser],
  user => user.isLoading
);

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectIsAccountOpen = createSelector(
  [selectUser],
  user => user.isAccountOpen
);

export const selectShowWelcomeModal = createSelector(
  [selectUser],
  user => user.showWelcomeModal
);
