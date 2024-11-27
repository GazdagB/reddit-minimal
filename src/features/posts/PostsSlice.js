import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';


//TODO: Add Posts to store and comments as well
/*
- Add store 
- Comments Opened State 
- Comments Closed 
- Upvotes Property
*/


//TODO: Add Reducer: UpVote and DownVote
export const fetchCommentsForPost = createAsyncThunk(
  'pots/fetchCommentsForPost',
  async (postId, thunkApi) => {
    try {
      const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
      if (!response.ok) throw new Error('Failed to fetch comments');

      const data = await response.json();

      // Limit to 15 and map comments
      const comments = data[1].data.children.slice(0, 15).map((child) => ({
        id: child.data.id,
        author: child.data.author,
        body_html: child.data.body,
        upvotes: child.data.ups,
        createdAt: new Date(child.data.created_utc * 1000).toLocaleString(),
        //TODO: Fetch user Picture as well 
        profileUrl: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png', // Default avatar
      }));

      return { postId, comments };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
)

export const fetchRedditPosts = createAsyncThunk(
  'posts/fetchRedditPosts',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const selectedSubreddit = state.subreddits.selectedSubreddit;

    if (!selectedSubreddit) {
      return thunkApi.rejectWithValue('No subreddit selected');
    }

    try {
      const response = await fetch(
        `https://www.reddit.com/${selectedSubreddit.subredditName}.json`
      );
      if (!response.ok) throw new Error('Failed to fetch posts');

      const data = await response.json();

      return data.data.children.map((child) => ({
        id: child.data.id,
        title: child.data.title,
        imageUrl: child.data.preview?.images[0]?.source?.url.startsWith('http')
          ? child.data.preview.images[0].source.url.replace(/&amp;/g, '&')
          : null,
        profileUrl: `https://www.reddit.com/user/${child.data.author}`,
        upvotes: child.data.ups,
        posted: new Date(child.data.created_utc * 1000).toLocaleString(),
        user: child.data.author,
        commentsOpened: false,
        num_comments: child.data.num_comments,
        comments: [], // We'll keep this empty initially
      }));
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  searchTerm: "",
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggleComments(state, action) {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post.commentsOpened = !post.commentsOpened;
      }
    },
    setSearchTerm(state, action) {
        state.searchTerm = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRedditPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRedditPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchRedditPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchCommentsForPost.pending, (state, action) => {
        const postId = action.meta.arg; // Correct way to access postId
        const post = state.posts.find((post) => post.id === postId);
        if (post) {
          post.status = 'loading';
        }
      })
      .addCase(fetchCommentsForPost.fulfilled, (state, action) => {
        const { postId, comments } = action.payload;
        const post = state.posts.find((post) => post.id === postId);
        if (post) {
          post.status = 'succeeded';
          post.comments = comments;
        }
      })
      .addCase(fetchCommentsForPost.rejected, (state, action) => {
        const postId = action.meta.arg; // Again, fetch postId from meta
        const post = state.posts.find((post) => post.id === postId);
        if (post) {
          post.status = 'failed';
        }
        state.error = action.payload;
      });
  },
});

export const selectFilteredPosts = createSelector(
    (state) => state.posts.posts,
    (state) => state.posts.searchTerm,
    (posts, searchTerm) => {
      if (!searchTerm) return posts;
      const lowerCasedSearchTerm = searchTerm.toLowerCase();
      return posts.filter((post) =>
        post.title.toLowerCase().includes(lowerCasedSearchTerm)
      );
    }
  );

export const { toggleComments, setSearchTerm } = postsSlice.actions;
export default postsSlice.reducer;
