import { axiosWithAuth } from '../utils/axiosWithAuth';
import { instanceAxios } from '../utils/instanceAxios';
import axios from 'axios';

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

export const SAVING_BOOK = 'SAVING_BOOK';
export const SAVED_BOOK = 'SAVED_BOOK';
export const SAVE_FAIL = 'SAVE_FAIL';

export const saveBook = (bookId) => dispatch => {
    dispatch({ type: SAVING_BOOK, payload: bookId});
    axios
        .post('https://better-reads-bw.herokuapp.com/api/user/book', bookId)
        .then( res => {
            dispatch({ type:SAVED_BOOK, payload:res.data});
        })
        .catch( err => {
            dispatch({ type: SAVE_FAIL, payload: err })
        })
}

export const DELETING_BOOK = 'DELETING_BOOK';
export const DELETED_BOOK = 'DELETED_BOOK';
export const DELETE_FAIL = 'DELETE_FAIL';

export const deleteBook = (bookId) => dispatch => {
    dispatch({ type: DELETING_BOOK, payload: bookId});
    axios
        .delete('https://better-reads-bw.herokuapp.com/api/user/book', bookId)
        .then( res => {
            dispatch({ type:DELETED_BOOK, payload:res.data});
        })
        .catch( err => {
            dispatch({ type: DELETE_FAIL, payload: err })
        })
}

export const GETTING_USER = 'GETTING_USER';
export const GOT_USER = 'GOT_USER';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const getUser = () => dispatch => {
    dispatch({ type: GETTING_USER });

        instanceAxios()
        .get('/user')
        .then( res => {
            console.log(res);
            dispatch({ type:GOT_USER, payload:res.data});
        })
        .catch( err => {
            (console.log(window.localStorage.getItem('token')));
            dispatch({ type: GET_USER_FAIL, payload: err })
        })
}