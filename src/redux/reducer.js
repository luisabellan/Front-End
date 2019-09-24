
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
        default:
            return state;
    }
}