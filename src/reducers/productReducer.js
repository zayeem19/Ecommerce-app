import {
  FEATURED_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  products: null,
  product: null,
  loading: false,
  error: null,
};
//eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case FEATURED_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    case PRODUCTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
