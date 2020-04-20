import {
  FETCH_BOOKS_SUCCESS,
  TOGGLE_ISFAVORITE,
  PAGINATION
} from "../actions/actionTypes";

const initialState = {
  books: [],
  prevBooks: [],
  pageNumber: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        pageNumber: 1
      };
    case TOGGLE_ISFAVORITE:
        console.log("Book ID Action", action);
      return {
        ...state,
        books: state.books.map((book, i) =>
          book === action.payload
            ? { ...book, isFavourite: !book.isFavourite }
            : book
        )
      };
      case PAGINATION:
          return {
            books: action.currentBooks,
            prevBooks: action.prevBooks,
            pageNumber: action.pageNumber
          };
    default:
      return state;
  }
};

export default reducer;
