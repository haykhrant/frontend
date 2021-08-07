import api from "../API";
import { registrationSuccess, registrationFailure } from "../actions";

export const registerThunk = (data) => async (dispatch) => {
    try {
        const response = await api.register.post(data);
            dispatch(registrationSuccess(response.data));
    } catch (err) {
        console.error("FROM GET_THUNK", err);
        if (err) {
            dispatch(registrationFailure(`${err}`));
        }
    }
};