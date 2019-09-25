import { SEARCHING_BOOKS, SEARCHED_BOOKS, SEARCH_FAIL } from './actions';
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
    user:{
        username:'',
        id:'',
        descriptions:[
            {description:'', descriptionId:'', returnedBooks:[{
                bookId:null,
                descriptionId:'',
                title:'',
                author:'',
                isbn:null,
                rating:'',
                read:false,
                saved:false}
            ]},
        ],
        savedBooks:[
            {bookId:null,
            descriptionId:'',
            title:'',
            author:'',
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
                user: action.payload
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
                user: [...state.user.descriptions], descriptions: [...state.user.descriptions, action.payload]
            }
        case SEARCH_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
}