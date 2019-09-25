import { SEARCHING_BOOKS, SEARCHED_BOOKS, SEARCH_FAIL } from './actions';

const initialUserState = {
    // user:{
    //     user:'',
    //     id:'',
    //     searches:[],
    //     savedBooks:[],
    // }

    //Alternative Data structure
    isSearching: false,
    returnedBooks: [],
    user:{
        username:'',
        id:'',
        descriptions:[
            {description:'', descriptionId:'', returnedBooks:[{
                bookId:null,
                descriptionId:'',
                title:'Harry Potter',
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
            
        case SEARCH_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
}