import axios from 'axios';

export const SEARCHING_BOOKS = 'SEARCHING_BOOKS';
export const SEARCHED_BOOKS = 'SEARCHED_BOOKS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const searchBooks = (description) => dispatch => {
    dispatch({ type: SEARCHING_BOOKS, payload: description });
    axios.post('https://better-reads-bw.herokuapp.com/api/user/description', description).then(res => {
        dispatch({ type: SEARCHED_BOOKS, payload: res.data});
    }).catch(err => {
        dispatch({ type: SEARCH_FAIL });
    });
};
