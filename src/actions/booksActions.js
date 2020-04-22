import axios from "axios";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  TOGGLE_ISFAVORITE,
  PAGINATION
} from "./actionTypes";

export const fetchBooks = () => dispatch => {
  dispatch(fetchRequest());
  axios
    .get("http://localhost:3004/books/?_page=1&_limit=20")
    .then(response => {
      const books = response.data;
      dispatch(fetchSuccess(books));
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

export const fetchSuccess = books => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books
  };
};

export const fetchFailure = error => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error
  };
};

export const toggleIsFavorite = (book, flag) => (dispatch) => {
  console.log("Updated", book);
    book.isFavourite = flag
  axios
  .put("http://localhost:3004/books/" + book.id, book)
  .then(response => {
    const updatedBook = response.data;
    dispatch(updateIsFavorite(updatedBook))
  })
  .catch(error => {
    // error.message is the error message
  })
};


export const updateIsFavorite = book => {
    return {
        type: TOGGLE_ISFAVORITE,
        payload: book
    };
}

export const booksPagination = (action) => (dispatch, getState) => {
    let pageNumber = getState().books.pageNumber;
    if (action === "previous") {
        const prevBooks = getState().books.prevBooks;
        const tempCurrentBooks = prevBooks.pop();
        pageNumber = pageNumber - 1;
        dispatch(getPagination(prevBooks, tempCurrentBooks, pageNumber));
        
    } else if (action === "next") {
        let PrevBooks = getState().books.prevBooks ? getState().books.prevBooks : [];
        const tempPrevBooks = getState().books.books;
        pageNumber = pageNumber+1;

        axios.get("http://localhost:3004/books/?_page="+ pageNumber + "&_limit=20").then((response) => {
            PrevBooks.push(tempPrevBooks);
            const tempCurrentBooks = response.data;
            dispatch(getPagination(PrevBooks, tempCurrentBooks, pageNumber));
        }).catch((error) => {
            console.log(error)
        })
    }
}

const getPagination = (prevBooks, tempCurrentBooks, pageNumber) => ({
    type: PAGINATION,
    prevBooks: prevBooks,
    currentBooks: tempCurrentBooks,
    pageNumber
})
