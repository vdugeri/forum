import { createSelector } from "reselect";

const selectExperts = state => state.experts;

export const selectExpertList = createSelector(
  [selectExperts],
  experts => experts.expertList
);

export const selectExpert = createSelector(
  [selectExperts],
  experts => experts.selectedExpert
);
