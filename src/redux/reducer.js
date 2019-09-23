
const initialUserState = {
    // user:{
    //     user:'',
    //     id:'',
    //     searches:[],
    //     savedBooks:[],
    // }

    //Alternative Data structure
    user:{
        username:'',
        id:'',
        searches:[
            {search:'', searchId:'', returnedBooks:[]},
        ],
        savedBooks:[
            {searchId:'',
            title:'',
            author:'',
            read:false,
            }
        ]
    }
}

export const reducer = (state = initialUserState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}