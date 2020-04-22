import {
FETCH_ALL_BOOKS
} from "../actions/actionTypes";

const initialState = {
  favBooks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKS:
      return {
        favBooks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
