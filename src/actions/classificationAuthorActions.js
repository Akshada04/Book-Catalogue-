import axios from 'axios';
import {
FETCH_BY_AUTHORS,
FETCH_BOOKS_ERROR,
FETCH_BOOKS_REQUEST
  } from './actionTypes';

export const fetchAuthors = () => dispatch => {
        console.log("action is", dispatch);
        dispatch(fetchAuthorsRequest())
      axios
        .get('http://localhost:3004/authors')
        .then(response => {
          const authors = response.data;
          console.log("Author data is",authors);
          dispatch(fetchSuccess(authors))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchFailure(error.message))
        })
  }

  export const fetchAuthorsRequest = authors => {
    return {
      type: FETCH_BOOKS_REQUEST
    }
  }
  
  export const fetchSuccess = authors => {
    return {
      type: FETCH_BY_AUTHORS,
      payload: authors
    }
  }
  
  export const fetchFailure = error => {
    return {
      type: FETCH_BOOKS_ERROR,
      payload: error
    }
  }
  

