import api from "../API";
import {
  registrationSuccess,
  registrationFailure,
  loginFailure,
  loginSuccess,
  addMessage,
} from "../actions";

export const registerThunk = (data) => async (dispatch) => {
  try {
    const response = await api.register.post(data);
    dispatch(registrationSuccess());
    dispatch(addMessage(response.data));
  } catch (err) {
    console.error("FROM GET_THUNK", err);
    if (err) {
      dispatch(registrationFailure());
      dispatch(addMessage(`${err}`));
    }
  }
};

export const loginThunk = (data) => async (dispatch) => {
  try {
    const response = await api.login.post(data);
    dispatch(loginSuccess());
    dispatch(addMessage(response.data));
  } catch (err) {
    console.error("FROM GET_THUNK", err);
    if (err) {
      dispatch(loginFailure());
      dispatch(addMessage(`${err}`));
    }
  }
};
