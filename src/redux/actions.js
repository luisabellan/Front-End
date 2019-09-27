import { axiosWithAuth } from '../utils/axiosWithAuth';
import { instanceAxios } from '../utils/instanceAxios';
import axios from 'axios';

//EZ
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

//NH
export const DELETING_SEARCH = 'DELETING_SEARCH';
export const DELETED_SEARCH = 'DELETED_SEARCH';
export const DELETE_S_FAIL = 'DELETE_S_FAIL';

export const deleteSearch = (searchId) => dispatch => {
    dispatch({ type: DELETING_SEARCH, payload: searchId});
    instanceAxios()
        .delete(`/user/description/${searchId}`)
        .then( res => {
            console.log('delete search res', res);
            console.log('delete search res.data', res.data)
            dispatch({ type:DELETED_SEARCH, payload:res.data});
        })
        .catch( err => {
            console.log('delete search err', err);
            console.log('delete search err.response', err.response);
            dispatch({ type: DELETE_S_FAIL, payload: err })
        })
}

export const SAVING_BOOK = 'SAVING_BOOK';
export const SAVED_BOOK = 'SAVED_BOOK';
export const SAVE_FAIL = 'SAVE_FAIL';

export const saveBook = (bookId) => dispatch => {
    dispatch({ type: SAVING_BOOK, payload: bookId});
    instanceAxios()
        .post('/user/book', bookId)
        .then( res => {
            console.log('save book res', res);
            console.log('save book res.data.books', res.data.books);
            dispatch({ type:SAVED_BOOK, payload:res.data.books});
        })
        .catch( err => {
            console.log('save book err', err);
            console.log('save book err.response', err.response);
            dispatch({ type: SAVE_FAIL, payload: err })
        })
}

export const DELETING_BOOK = 'DELETING_BOOK';
export const DELETED_BOOK = 'DELETED_BOOK';
export const DELETE_FAIL = 'DELETE_FAIL';

export const deleteBook = (bookId) => dispatch => {
    dispatch({ type: DELETING_BOOK, payload: bookId});
    instanceAxios()
        .delete(`/user/book/${bookId}`)
        .then( res => {
            console.log('delete book res', res);
            console.log('delete book res.data.bookList', res.data.bookList);
            dispatch({ type:DELETED_BOOK, payload:res.data.bookList});
        })
        .catch( err => {
            console.log('delete book err', err);
            console.log('delete book err.response', err.response);
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
            console.log('get user res', res);
            console.log('get user res.data', res.data);
            dispatch({ type:GOT_USER, payload:res.data});
        })
        .catch( err => {
            console.log('get user err', err);
            console.log('get user err.response', err.response);
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