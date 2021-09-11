export const getCategoriesSuccess = (data) => ({
  type: "GET_CATEGORIES_SUCCESS",
  payload: data,
});

export const getCategoriesFailure = () => ({
  type: "GET_CATEGORIES_FAILURE",
});
