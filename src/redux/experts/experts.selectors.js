import { createSelector } from "reselect";

const selectExperts = state => state.experts;

export const selectExpertList = createSelector(
  [selectExperts],
  experts => experts.expertList
);
