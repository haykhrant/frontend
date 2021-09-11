const initialState = {
  getProductsStatus: false,
  products: [],
  loading: false,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        getProductsStatus: true,
        products: action.payload,
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        getProductsStatus: false,
      };
    case "SET_LOADING_PRODUCT":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
