import { fetchPosts, searchPosts } from "../redux/slice/postsSlice";
import { API_URL } from "../utils/apiURL";
import { useDispatch } from "react-redux";
import React from "react";
import "./Form.css";

const SearchPost = () => {
	const dispatch = useDispatch();

	const [search, setSearch] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchPosts(`${API_URL}/${search}`));
	};

	const handleReset = (e) => {
		e.preventDefault();
		dispatch(fetchPosts());
	};

	return (
		<div className="form-header">
			<div>
				<h2>React Redux ToolKit Project</h2>
				<p>
					This project is a simple React Redux Toolkit project that fetches data
					with search functionality from an API
				</p>
			</div>
			<form onSubmit={handleSubmit} onReset={handleReset}>
				<input
					placeholder="Search for a post"
					type="number"
					value={search}
					min={1}
					max={100}
					onChange={(e) => setSearch(e.target.value)}
					required
				/>
				<button type="submit">Search</button>
				<button type="reset">Reset</button>
			</form>
		</div>
	);
};

export default SearchPost;
