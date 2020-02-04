import expertsActionTypes from "redux/experts/experts.types";

export const startFetchExperts = () => ({
  type: expertsActionTypes.START_FETCH_EXPERTS
});

export const fetchExpertsSuccess = experts => ({
  type: expertsActionTypes.FETCH_EXPERTS_SUCCESS,
  payload: experts
});

export const fetchExpertsFailure = error => ({
  type: expertsActionTypes.FETCH_EXPERTS_FAILURE,
  payload: error
});

export const selectExpert = expert => ({
  type: expertsActionTypes.SELECT_EXPERT,
  payload: expert
});
