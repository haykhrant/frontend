const initialState = {
  getCategoriesStatus: false,
  categories: [],
  loading: false,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        getCategoriesStatus: true,
        categories: action.payload,
      };
    case "GET_CATEGORIES_FAILURE":
      return {
        ...state,
        getCategoriesStatus: false,
      };
    case "SET_LOADING_CATEGORY":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
