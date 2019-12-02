import userActionTypes from "redux/user/user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
  modalShown: false,
  isAccountOpen: false,
  showWelcomeModal: false
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.LOGIN_START:
    case userActionTypes.SIGNUP_START:
    case userActionTypes.SIGN_OUT_START:
    case userActionTypes.UPDATE_USER_ACCOUNT_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case userActionTypes.LOGIN_FAILURE:
    case userActionTypes.SIGNUP_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.UPDATE_USER_ACCOUNT_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    case userActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
        isLoading: false
      };
    case userActionTypes.SIGNUP_SUCCESS:
    case userActionTypes.UPDATE_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
        isLoading: false,
        showWelcomeModal: true
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
    case userActionTypes.CLOSE_WELCOME_MODAL:
      return {
        ...state,
        showWelcomeModal: false
      };
    default:
      return state;
  }
};

export default userReducer;
