import { axiosWithAuth } from '../utils/axiosWithAuth';
import { instanceAxios } from '../utils/instanceAxios';
import axios from 'axios';

export const SEARCHING_BOOKS = 'SEARCHING_BOOKS';
export const SEARCHED_BOOKS = 'SEARCHED_BOOKS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const SET_IMAGES = 'SET_IMAGES'
export const GET_IMAGES = 'GET_IMAGES'

export const searchBooks = (description) => dispatch => {
    dispatch({ type: SEARCHING_BOOKS, payload: description });
    console.log(dispatch.payload);
    axiosWithAuth().post('https://better-reads-bw.herokuapp.com/api/user/description', description).then(res => {
        console.log(res)
        dispatch({ type: SEARCHED_BOOKS, payload: res.data});
        return res.data
    }).catch(err => {
        dispatch({ type: SEARCH_FAIL });
    });
};


export const setImages = (isbn) => dispatch => {
    dispatch({ type: GET_IMAGES });
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:9781118531648&key=AIzaSyANj7100xMl9DwJw-uVv-pxGOZxRCDnQgU`).then( res => {
            dispatch({ type: SET_IMAGES, payload: res.data });
            console.log(res.data)                
        })
}

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

export const LOG_OUT = 'LOG_OUT';
export const LOG_IN = 'LOG_IN';

export const logOut = () => dispatch => {
    dispatch({ type: LOG_OUT });
}

export const logIn = () => dispatch => {
    dispatch({ type: LOG_IN });
}