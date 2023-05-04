import { fetchPosts } from "../redux/slice/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../utils/apiURL";
import SearchPost from "./SearchPost";
import { useEffect } from "react";
import "./Posts.css";

const PostsList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	const storeData = useSelector((state) => {
		return state.posts;
	});

	console.log(storeData);

	return (
		<>
			<SearchPost />
			<h1>Total Posts {storeData.posts.length}</h1>
			{storeData.posts.map((post) => (
				<div className="posts-list">
					<div className="post-details">
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default PostsList;
