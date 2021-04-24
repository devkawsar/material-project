import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Comments.css";

const Comments = (props) => {
	const { name, email, body, postId, id } = props.comment;
	const [image, setImage] = useState([]);
	useEffect(() => {
		fetch("https://randomuser.me/api/?inc=picture")
			.then((response) => response.json())
			.then((data) => setImage(data.results[0].picture.large));
	}, []);
	return (
		<div className="comments-container">
			<div className="image-container">
				<img src={image} alt="this is an image" />
			</div>
			<div className="comments">
				<Typography variant="h5" color="primary">
					{name}
				</Typography>
				<p>{body}</p>
				<h6>{email}</h6>
			</div>
		</div>
	);
};

export default Comments;
