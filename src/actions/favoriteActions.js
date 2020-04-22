import axios from "axios";
import {
FETCH_ALL_BOOKS,
FETCH_BOOKS_REQUEST,
FETCH_BOOKS_ERROR
} from "./actionTypes";

export const fetchFavoriteList = () => dispatch => {
  dispatch(fetchRequest());
  axios
    .get("http://localhost:3004/books")
    .then(response => {
      const favBooks = response.data;
      console.log("favbook", favBooks);
      dispatch(fetchSuccess(favBooks));
    })
    .catch(error => {
      // error.message is the error message
      dispatch(fetchFailure(error.message));
    });
};

export const fetchRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  };
};

export const fetchSuccess = favBooks => {
  return {
    type: FETCH_ALL_BOOKS,
    payload: favBooks
  };
};

export const fetchFailure = error => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error
  };
};

