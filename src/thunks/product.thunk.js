import { getProductSuccess, getProductFailure } from "../actions";
import api from "../API";

export const getProductThunk = () => async (dispatch) => {
  try {
    const response = await api.products.get();
    dispatch(getProductSuccess(response.data));
  } catch (err) {
    console.error("FROM PRODUCT_THUNK", err);
    if (err) {
      dispatch(getProductFailure());
    }
  }
};

export const getProductByCategoryThunk = (id) => async (dispatch) => {
  try {
    const response = await api.productsByCategory(id).get();
    dispatch(getProductSuccess(response.data));
  } catch (err) {
    console.error("FROM PRODUCT_THUNK", err);
    if (err) {
      dispatch(getProductFailure());
    }
  }
};
