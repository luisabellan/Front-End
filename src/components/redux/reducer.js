
const initialUserState = {
    user:{
        user:'',
        id:'',
        searches:[],
        savedBooks:[],
    }
}

export const reducer = (state = initialUserState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}