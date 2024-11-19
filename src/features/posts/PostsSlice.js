import { createSlice } from "@reduxjs/toolkit";

//TODO: Add Posts to store and comments as well 
/*
- Add store 
- Comments Opened State 
- Comments Closed 
- Upvotes Property
*/

//TODO: Add Reducer: UpVote and DownVote 

const initialState = [
{
    id: "",
    title: "",
    imageUrl: "",
    profileUrl: "",
    upvotes: 0,
    posted: "",
    user: "",
    commentsOpened: false,
    comments: [
        {
            profilImage: "",
            username: "",
            created: "",
            text: ""
        }
    ]
}
]; 

const postsSlice = createSlice({
    name: "posts", 
    initialState: initialState,
    reducers: {

    },
    extraReducers: {}
})

export default postsSlice.reducer; 