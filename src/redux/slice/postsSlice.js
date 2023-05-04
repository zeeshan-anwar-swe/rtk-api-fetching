import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/apiURL";

// Initial State
const initialState = {
	posts: [],
	loading: false,
	error: undefined,
};

// Action
export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
	const response = await axios.get(API_URL);
	return response.data;
});

export const searchPosts = createAsyncThunk("posts/search", async (url) => {
	const response = await axios.get(url);
	return response.data;
});

const postsSlice = createSlice({
	name: "posts",
	initialState,
	extraReducers: (builder) => {
		// Pending
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.loading = true;
		});
		// Fullfilled
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.loading = false;
			state.posts = action.payload;
		});

		// Rejected
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.loading = false;
			state.posts = [];
			state.error = action.payload;
		});

		// Pending
		builder.addCase(searchPosts.pending, (state, action) => {
			state.loading = true;
		});
		// Fullfilled
		builder.addCase(searchPosts.fulfilled, (state, action) => {
			state.loading = false;
			state.posts = [action.payload];
		});

		// Rejected
		builder.addCase(searchPosts.rejected, (state, action) => {
			state.loading = false;
			state.posts = [];
			state.error = action.payload;
		});
	},
});

// Generate Reducer
const postsReducer = postsSlice.reducer;

export default postsReducer;
