import userActionTypes from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.LOGIN_START:
    case userActionTypes.SIGNUP_START:
      return {
        ...state,
        isLoading: true
      };
    case userActionTypes.LOGIN_FAILURE:
    case userActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: payload
      };
    case userActionTypes.LOGIN_SUCCESS:
    case userActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null
      };
    default:
      return state;
  }
};

export default userReducer;
