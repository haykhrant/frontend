export const registrationSuccess = (data) => ({
  type: "REGISTRATION_SUCCESS",
  payload: data,
});

export const registrationFailure = (err) => ({
  type: "REGISTRATION_FAILURE",
  payload: err,
});

export const loginSuccess = (data) => ({
  type: "LOGIN_SUCCESS",
  payload: data,
});

export const loginFailure = (err) => ({
  type: "LOGIN_FAILURE",
  payload: err,
});

export const logout = () => ({
  type: "LOGOUT",
});
