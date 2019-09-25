import { axiosWithAuth } from '../utils/axiosWithAuth';

export const SEARCHING_BOOKS = 'SEARCHING_BOOKS';
export const SEARCHED_BOOKS = 'SEARCHED_BOOKS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const searchBooks = (description) => dispatch => {
    console.log(description)
    dispatch({ type: SEARCHING_BOOKS, payload: description });
    console.log(dispatch.payload);
    axiosWithAuth().post('https://better-reads-bw.herokuapp.com/api/user/description', description).then(res => {
        console.log(res)
        dispatch({ type: SEARCHED_BOOKS, payload: res.data});
    }).catch(err => {
        dispatch({ type: SEARCH_FAIL });
    });
};
