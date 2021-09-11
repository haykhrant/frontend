import {
  addMessage,
  getCategoriesSuccess,
  getCategoriesFailure,
  setLoadingCategory,
} from "../actions";
import api from "../API";

export const getCategoryThunk = () => async (dispatch) => {
  try {
    dispatch(setLoadingCategory(true));
    const response = await api.categories.get();
    dispatch(getCategoriesSuccess(response.data));
    dispatch(setLoadingCategory(false));
  } catch (err) {
    console.error("FROM CATEGORY_THUNK", err);
    if (err) {
      dispatch(getCategoriesFailure());
      dispatch(setLoadingCategory(false));
      dispatch(addMessage(`${err}`));
    }
  }
};
