import api from "../API";
import {
  registrationSuccess,
  registrationFailure,
  loginFailure,
  loginSuccess,
  addMessage,
} from "../actions";
import { generateTokenString } from "../utils";

export const registerThunk = (data) => async (dispatch) => {
  try {
    const response = await api.register.post(data);
    dispatch(registrationSuccess());
    dispatch(addMessage(response.data));
  } catch (err) {
    console.error("FROM REGISTER_THUNK", err);
    if (err) {
      dispatch(registrationFailure());
      dispatch(addMessage(`${err}`));
    }
  }
};

export const loginThunk = (data) => async (dispatch) => {
  try {
    const token = generateTokenString(data);
    console.log(token);
    const encodeToken = btoa(token);
    const response = await api.login.get({
      headers: {
        Authorization: `Basic ${encodeToken}`,
      },
    });
    dispatch(loginSuccess());
    dispatch(addMessage(response.data.username + " Log in successful"));
  } catch (err) {
    console.error("FROM LOGIN_THUNK", err);
    if (err) {
      dispatch(loginFailure());
      dispatch(addMessage(`${err}`));
    }
  }
};
