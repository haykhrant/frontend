export const getProductSuccess = (data) => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: data,
});

export const getProductFailure = () => ({
  type: "GET_PRODUCTS_FAILURE",
});
