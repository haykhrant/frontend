const initialState = {
  getProductsStatus: false,
  products: [],
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
    default:
      return state;
  }
}
