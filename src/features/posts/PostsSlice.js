import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//TODO: Add Posts to store and comments as well 
/*
- Add store 
- Comments Opened State 
- Comments Closed 
- Upvotes Property
*/

//TODO: Add Reducer: UpVote and DownVote 

export const fetchRedditPosts = createAsyncThunk(
    "posts/fetchRedditPosts",
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const selectedSubreddit = state.subreddits.selectedSubreddit;

        if (!selectedSubreddit) {
            return thunkApi.rejectWithValue("No subreddit selected");
        }

        try {
            const response = await fetch(`https://www.reddit.com/r/${selectedSubreddit.subredditName}.json`);
            if (!response.ok) throw new Error("Failed to fetch posts");

            const data = await response.json();

            return data.data.children.map((child) => ({
                id: child.data.id,
                title: child.data.title,
                imageUrl: child.data.thumbnail.startsWith("http") ? child.data.thumbnail : null,
                profileUrl: `https://www.reddit.com/user/${child.data.author}`,
                upvotes: child.data.ups,
                posted: new Date(child.data.created_utc * 1000).toLocaleString(),
                user: child.data.author,
                commentsOpened: false,
                comments: [] // We'll keep this empty initially
            }));
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    posts: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        toggleComments(state, action) {
            const post = state.posts.find((post) => post.id === action.payload);
            if (post) {
                post.commentsOpened = !post.commentsOpened;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRedditPosts.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchRedditPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = action.payload;
            })
            .addCase(fetchRedditPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    }
});

export const { toggleComments } = postsSlice.actions;
export default postsSlice.reducer;