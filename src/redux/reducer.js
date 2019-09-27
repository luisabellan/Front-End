import { SEARCHING_BOOKS, SEARCHED_BOOKS, SEARCH_FAIL, SET_IMAGES, LOG_OUT, LOG_IN } from './actions';
import { GETTING_USER, GOT_USER, GET_USER_FAIL } from './actions';
//Save/ Delete Book
import { SAVING_BOOK, SAVED_BOOK, SAVE_FAIL, DELETING_BOOK, DELETED_BOOK, DELETE_FAIL} from './actions';
//Delete Search
import { DELETING_SEARCH, DELETED_SEARCH, DELETE_S_FAIL } from './actions';

const initialUserState = {
    // user:{
    //     user:'',
    //     id:'',
    //     searches:[],
    //     savedBooks:[],
    // }

    //Alternative Data structure
    isLoggedIn: false,
    isGetting: false,
    isSaving: false,
    isDeletingBook: false,
    isSearching: false,
    isDeletingSearch: false,
    returnedBooks: [],
    img_URLs: [],
    user:{
        username:'',
        id:null,
        descriptions:[
            {description:'', id:'', books:[]},
        ],
        savedBooks:[
            {
            title: "",
            authors: "",
            id: null,
            rating: null,
            ISBN: "",
            read: false
        }
    ]
    }
}

export const reducer = (state = initialUserState, action) => {
    switch (action.type) {
        //User
        case GETTING_USER:
            return{
                isGetting: true,
                ...state
            }

        case GOT_USER:
            return{
                isGetting:false,
                isLoggedIn: true,
                ...state,
                user: {
                    ...state.user,
                    username: action.payload.username,
                    id: action.payload.id,
                    descriptions: action.payload.descriptions,
                    savedBooks: action.payload.books
                }
            }
        
        case GET_USER_FAIL:
            return(
                console.log(action.payload)
            )
        
        //Saving Book
        case SAVING_BOOK:
            return{
                isSaving: true,
                ...state
            } 
            
        case SAVED_BOOK:
            return{
                isSaving:false,
                ...state,
                user: {
                    ...state.user,
                    savedBooks: action.payload
                }
                /* payload = books
                user:{
                    ...state.user,
                    savedBooks:action.payload
                }
                */
            } 
            
        case SAVE_FAIL:
            return(
                console.log(action.payload)
            )

        //Deleting Book
        case DELETING_BOOK:
            return{
                isDeletingBook: true,
                ...state
            } 
            
        case DELETED_BOOK:
            return{
                isDeletingBook: false,
                ...state,
                user: {
                    ...state.user,
                    savedBooks:action.payload
                }
                /* payload = books
                user:{
                    ...state.user,
                    state.savedBooks.filter( book => book.id !== action.payload)
                }
                */
            } 
            
        case DELETE_FAIL:
            return(
                console.log(action.payload)
            )

        //Deleting Search
        case DELETING_SEARCH:
            return{
                    isDeletingSearch:true,
                    ...state
                } 
                
        case DELETED_SEARCH:
            return{
                isDeletingSearch:false,
                ...state,
                user:{
                    ...state.user,
                    descriptions: action.payload
                }
            } 
            
        case DELETE_S_FAIL:
            return(
                console.log(action.payload)
            )

        //Search
        case SEARCHING_BOOKS:
            return {
                isSearching: true,
                ...state,                 
            }
        case SEARCHED_BOOKS:
            return {
                isSearching: false,
                ...state,
                user: {
                    ...state.user,
                    descriptions: [...state.user.descriptions, action.payload],
                },
                    returnedBooks: action.payload.books
            }
        case SET_IMAGES:
            return {
                isSearching: false,
                ...state,
                img_URL: action.payload
            }
            
        case SEARCH_FAIL:
            return {
                ...state
            }
        case LOG_IN:
            return {
                ...state, 
                isLoggedIn: !false,
            }
        case LOG_OUT: 
        return {
            ...state, 
            isLoggedIn: false,
        }
        default:
            return state;
    }
}