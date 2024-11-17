import { createSlice } from "@reduxjs/toolkit";

const initialState = []; 

const postsSlice = createSlice({
    name: "posts", 
    initialState: initialState,
    reducers: {

    },
    extraReducers: {}
})

export default postsSlice.reducer; 