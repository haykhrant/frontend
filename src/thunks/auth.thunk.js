import api from "../API";
import {
  registrationSuccess,
  registrationFailure,
  loginFailure,
  loginSuccess,
  addMessage,
  setLoadingAuth,
} from "../actions";
import { generateTokenString } from "../utils";

export const registerThunk = (data) => async (dispatch) => {
  try {
    dispatch(setLoadingAuth(true));
    const response = await api.register.post(data);
    dispatch(registrationSuccess(response.data));
    dispatch(setLoadingAuth(false));
    dispatch(addMessage("Registration successful", "success"));
  } catch (err) {
    console.error("FROM REGISTER_THUNK", err);
    if (err) {
      dispatch(registrationFailure());
      dispatch(setLoadingAuth(false));
      dispatch(addMessage(`${err}`, "failure"));
    }
  }
};

export const loginThunk = (data) => async (dispatch) => {
  try {
    dispatch(setLoadingAuth(true));
    const token = generateTokenString(data);
    const encodeToken = Buffer.from(token).toString("base64");
    const response = await api.login.get({
      headers: {
        Authorization: `Basic ${encodeToken}`,
      },
    });
    dispatch(loginSuccess(response.data));
    dispatch(setLoadingAuth(false));
    dispatch(addMessage("Log in successful", "success"));
  } catch (err) {
    console.error("FROM LOGIN_THUNK", err);
    if (err) {
      dispatch(loginFailure());
      dispatch(setLoadingAuth(false));
      dispatch(addMessage(`${err}`, "failure"));
    }
  }
};
