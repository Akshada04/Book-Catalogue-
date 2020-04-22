import {combineReducers} from 'redux';
import books from './bookReducer';
import authors from './classificationAuthor';
import categories from './classificationCategories';
import favoriteBooks from './favoriteReducer'

const rootReducer = combineReducers({
    books,
    favoriteBooks,
    authors,
    categories
})

export default rootReducer;