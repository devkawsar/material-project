import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../Comments/Comments";
import "./PostDetail.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

const PostDetail = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const { title, body } = post;
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setPost(data));

		//comments
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
			.then((response) => response.json())
			.then((data) => setComments(data));
	}, []);
	return (
		<div className="post-detail">
			<Card>
				<CardHeader title={title} />
				<CardContent>
					<Typography>{body}</Typography>
				</CardContent>
			</Card>
			<br />
			<Typography variant="h6">Comments</Typography>
			{comments.map((comment) => (
				<Comments comment={comment}></Comments>
			))}
		</div>
	);
};

export default PostDetail;
