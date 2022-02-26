import {
  GET_PRODUCT,
  FEATURED_PRODUCTS,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  SET_LOADING,
} from "./types";

//Fetches featured product from api
export const featuredProducts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await res.json();

      dispatch({
        type: FEATURED_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCTS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

//Fetches data from api
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: PRODUCTS_ERROR, payload: err.response.statusText });
    }
  };
};

//Fetches single product
export const getProduct = (id) => {
  return (dispatch) => {
    try {
      const res = fetch(`https://fakestoreapi.com/products/${id}`);
      const data = res.json();

      dispatch({
        type: GET_PRODUCT,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCTS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
