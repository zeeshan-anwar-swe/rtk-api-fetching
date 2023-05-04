import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slice/postsSlice";

const store = configureStore({
	reducer: {
		posts: postsReducer,
	},
});

export default store;
