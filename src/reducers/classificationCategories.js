import {
    FETCH_BOOKS_ERROR,
    FETCH_BY_CATEGORIES
  } from "../actions/actionTypes";
  
  const initialState = {
    categories: [],
    error: ""
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BY_CATEGORIES:
        return {
          categories: action.payload,
          error: ""
        };
      case FETCH_BOOKS_ERROR:
        return {
          loading: false,
          categories: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  