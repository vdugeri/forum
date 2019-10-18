import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
  modalShown: false,
  isAccountOpen: false
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.LOGIN_START:
    case userActionTypes.SIGNUP_START:
    case userActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true
      };
    case userActionTypes.LOGIN_FAILURE:
    case userActionTypes.SIGNUP_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    case userActionTypes.LOGIN_SUCCESS:
    case userActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
        isLoading: false
      };
    case userActionTypes.TOGGLE_REGISTRATION_MODAL:
      return {
        ...state,
        modalShown: !state.modalShown
      };
    case userActionTypes.TOGGLE_ACCOUNT_DROPDOWN:
      return {
        ...state,
        isAccountOpen: !state.isAccountOpen
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;
