import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
    "subreddits/fetchSubreddits",
    async (_,thunkAPI) => { 
        try {
            const response = await fetch("https://www.reddit.com/subreddits/popular.json")
            if (!response.ok) throw new Error("Failed to fetch subreddits");
            const data = await response.json();

            return data.data.children.map((child) => ({
                id: child.data.id,
                subredditName: child.data.display_name_prefixed, 
                url: `https://www.reddit.com${child.data.url}`, 
                subscribers: child.data.subscribers, 
                icon: child.data.icon_img || "https://via.placeholder.com/50"
            }));
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const initialState = {
    subreddits: [],
    selectedSubreddit: {
        subredditName: "r/pics"
    },
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

const subredditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        selectSubreddit: (state, action)=>{
            state.selectedSubreddit = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubreddits.pending, (state)=>{
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchSubreddits.fulfilled, (state,action)=>{
                state.status = "succeeded";
                state.subreddits = action.payload
            })
            .addCase(fetchSubreddits.rejected, (state,action)=>{
                state.status = "failed";
                state.error = action.payload
            })
    }
})


export const {selectSubreddit} = subredditsSlice.actions;
export default subredditsSlice.reducer;