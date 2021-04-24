import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Home = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		//load data
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => setPosts(data.slice(0, 10)));
	});
	return (
		<Container>
			<Typography variant="h2">Social Buddy</Typography>
			<br />
			{posts.map((post) => (
				<Post key={post.id} blogPost={post}></Post>
			))}
		</Container>
	);
};

export default Home;
