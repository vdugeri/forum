import userActionTypes from "redux/user/user.types";

export const userSignInStart = (userCreds) => ({
  type: userActionTypes.LOGIN_START,
  payload: userCreds,
});

export const userSignInSuccess = ({ user, token }) => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: { user, token },
});

export const userSignInFailure = (error) => ({
  type: userActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const userSignUpStart = (userCreds) => ({
  type: userActionTypes.SIGNUP_START,
  payload: { userCreds },
});

export const userSignUpSuccess = (user) => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: user,
});

export const userSignUpFailure = (error) => ({
  type: userActionTypes.SIGNUP_FAILURE,
  payload: error,
});

export const userSignoutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const userSignoutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const userSignoutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const toggleModalStatus = () => ({
  type: userActionTypes.TOGGLE_REGISTRATION_MODAL,
});

export const toggleAccountDropdown = () => ({
  type: userActionTypes.TOGGLE_ACCOUNT_DROPDOWN,
});

export const closeWelcomeModal = () => ({
  type: userActionTypes.CLOSE_WELCOME_MODAL,
});

export const updateUserAccountStart = (user) => ({
  type: userActionTypes.UPDATE_USER_ACCOUNT_START,
  payload: user,
});

export const udpateUserAccountSuccess = (user) => ({
  type: userActionTypes.UPDATE_USER_ACCOUNT_SUCCESS,
  payload: user,
});

export const updateUserAccountFailure = (error) => ({
  type: userActionTypes.UPDATE_USER_ACCOUNT_FAILURE,
  payload: error,
});
