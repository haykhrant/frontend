import {
  addMessage,
  getCategoriesSuccess,
  getCategoriesFailure,
} from "../actions";
import api from "../API";

export const getCategoryThunk = () => async (dispatch) => {
  try {
    const response = await api.categories.get();
    dispatch(getCategoriesSuccess(response.data));
  } catch (err) {
    console.error("FROM CATEGORY_THUNK", err);
    if (err) {
      dispatch(getCategoriesFailure());
      dispatch(addMessage(`${err}`));
    }
  }
};
