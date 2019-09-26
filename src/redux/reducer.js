import { SEARCHING_BOOKS, SEARCHED_BOOKS, SEARCH_FAIL, SET_IMAGES } from './actions';
import { GETTING_USER, GOT_USER, GET_USER_FAIL } from './actions';

const initialUserState = {
    // user:{
    //     user:'',
    //     id:'',
    //     searches:[],
    //     savedBooks:[],
    // }

    //Alternative Data structure
    isGetting: false,
    isSaving: false,
    isDeletingBook: false,
    isSearching: false,
    returnedBooks: [],
    img_URLs: [],
    user:{
        username:'',
        id:null,
        descriptions:[
            {description:'', id:'', books:[]},
        ],
        savedBooks:[
            {bookId:null,
            descriptionId:'',
            title:'',
            author:'',
            img_URL:'',
            isbn:null,
            rating:'',
            read:false,
            saved:true
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
                ...state,
                user: {
                    ...state.user,
                    username: action.payload.username,
                    id: action.payload.id,
                    descriptions: action.payload.descriptions,
                    savedBooks: action.payload.books
                }
            }
        


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
                user: [...state.user.descriptions], 
                descriptions: [...state.user.descriptions, action.payload.description],
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
        default:
            return state;
    }
}