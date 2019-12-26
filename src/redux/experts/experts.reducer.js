import expertsActionTypes from "redux/experts/experts.types";

const INITIAL_STATE = {
  error: null,
  isFetchingExperts: false,
  expertList: []
};

const expertsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case expertsActionTypes.START_FETCH_EXPERTS:
      return {
        ...state,
        isFetchingExperts: true,
        error: null
      };

    case expertsActionTypes.FETCH_EXPERTS_SUCCESS:
      return {
        ...state,
        isFetchingExperts: false,
        expertList: payload,
        error: null
      };
    case expertsActionTypes.FETCH_EXPERTS_FAILURE:
      return {
        ...state,
        isFetchingExperts: false,
        error: payload
      };

    default:
      return state;
  }
};

export default expertsReducer;
