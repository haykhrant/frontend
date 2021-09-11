import {
  getProductSuccess,
  getProductFailure,
  setLoadingProduct,
} from "../actions";
import api from "../API";

export const getProductThunk = () => async (dispatch) => {
  try {
    dispatch(setLoadingProduct(true));
    const response = await api.products.get();
    dispatch(getProductSuccess(response.data));
    dispatch(setLoadingProduct(false));
  } catch (err) {
    console.error("FROM PRODUCT_THUNK", err);
    if (err) {
      dispatch(getProductFailure());
      dispatch(setLoadingProduct(false));
    }
  }
};

export const getProductByCategoryThunk = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingProduct(true));
    const response = await api.productsByCategory(id).get();
    dispatch(getProductSuccess(response.data));
    dispatch(setLoadingProduct(false));
  } catch (err) {
    console.error("FROM PRODUCT_THUNK", err);
    if (err) {
      dispatch(getProductFailure());
      dispatch(setLoadingProduct(false));
    }
  }
};
