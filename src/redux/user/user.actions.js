import userActionTypes from "./user.types";

export const userSignInStart = userCreds => ({
  type: userActionTypes.LOGIN_START,
  payload: userCreds
});

export const userSignInSuccess = user => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: user
});

export const userSignInFailure = error => ({
  type: userActionTypes.LOGIN_FAILURE,
  payload: error
});

export const userSignUpStart = userCreds => ({
  type: userActionTypes.SIGNUP_START,
  payload: userCreds
});

export const userSignUpSuccess = user => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: user
});

export const userSignUpFailure = error => ({
  type: userActionTypes.SIGNUP_FAILURE,
  payload: error
});
