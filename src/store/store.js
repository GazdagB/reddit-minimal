import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddits/RedditsSlice";
import postsReducer from "../features/posts/PostsSlice";

const rootReducer = combineReducers({
    subreddits: subredditsReducer,
    posts: postsReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;