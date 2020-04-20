import axios from 'axios';
import {
FETCH_BY_CATEGORIES,
FETCH_BOOKS_ERROR,
FETCH_BOOKS_REQUEST
  } from './actionTypes';

export const fetchCategories = () => {
    return (dispatch) => {
        console.log("action is", dispatch);
        dispatch(fetchAuthorsRequest())
      axios
        .get('http://localhost:3004/categories')
        .then(response => {
          // response.data is the users
          console.log("response is", response);
          const categories = response.data;
          console.log("Author data is",categories);
          dispatch(fetchSuccess(categories))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchFailure(error.message))
        })
    }
  }

  export const fetchAuthorsRequest = categories => {
    return {
      type: FETCH_BOOKS_REQUEST
    }
  }
  
  export const fetchSuccess = categories => {
    return {
      type: FETCH_BY_CATEGORIES,
      payload: categories
    }
  }
  
  export const fetchFailure = error => {
    return {
      type: FETCH_BOOKS_ERROR,
      payload: error
    }
  }
  

