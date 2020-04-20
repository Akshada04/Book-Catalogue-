import {
    FETCH_BOOKS_ERROR,
    FETCH_BY_AUTHORS
  } from "../actions/actionTypes";
  
  const initialState = {
    authors: [],
    error: ""
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BY_AUTHORS:
        return {
          authors: action.payload,
          error: ""
        };
      case FETCH_BOOKS_ERROR:
        return {
          loading: false,
          authors: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  