import {combineReducers} from 'redux';
import books from './bookReducer';
import authors from './classificationAuthor';
import categories from './classificationCategories';

const rootReducer = combineReducers({
    books,
    authors,
    categories
})

export default rootReducer;